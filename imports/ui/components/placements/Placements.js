import { Template } from 'meteor/templating';
import Placements from '../../../api/placements/placements';
import Children from '../../../api/children/children';
import Rates from '../../../api/rates/rates';
import './Placements.html';
import '../../stylesheets/styles.css';
import { showToast } from '../../../api/utilities';
import {
  placementRemove,
  placementInsert
} from '../../../api/placements/methods';

Template.Placements.onCreated(function() {
  this.autorun(() => {
    this.subscribe('placements.all');
    this.subscribe('children.all');
    this.subscribe('rates.all');
  });
});

Template.Placements.helpers({
  placements() {
    return Placements.find({});
  },
  children() {
    return Children.find({});
  },
  rates() {
    return Rates.find();
  },
  childName() {
    const child = Children.findOne({ _id: this.childId });
    return child && child.name;
  },
});

Template.Placements.events({
  'submit .placement-add': function(event) {
    event.preventDefault();

    const {
      startDate, endDate, isActive, childId, rateId,
    } = event.target;

    placementInsert.call(
      {
        startDate: new Date(startDate.value),
        endDate: endDate.value ? new Date(endDate.value) : null,
        isActive: isActive.value === 'yes',
        childId: childId.value,
        rateId: rateId.value,
      },
      (error) => {
        showToast(error);
        if (!error) {
          startDate.value = '';
          endDate.value = '';
          isActive.value = '';
          childId.value = '';
          rateId.value = '';
        }
      }
    );
  },
  'click .removePlacement': function() {
    placementRemove.call({ placementId: this._id }, (error) => {
      if (error) {
        showToast(error);
      } else {
        showToast();
      }
    });
  },
});
