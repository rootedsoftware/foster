import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './EditPlacement.html';
import { Placements } from '../../../api/placements/placements';
import { Rates } from '../../../api/rates/rates';
import Children from '../../../api/children/children';
import { showToast } from '../../../api/utilities';

Template.EditPlacement.onCreated(function() {
  this.autorun(() => {
    this.subscribe('placement', FlowRouter.current().params.placementId);
    this.subscribe('children.all');
    this.subscribe('rates.all');
  });
});

Template.EditPlacement.helpers({
  placement() {
    return Placements.findOne();
  },
  rates() {
    return Rates.find();
  },
  childName() {
    const child = Children.findOne({ _id: this.childId });
    return child && child.name;
  },
});

Template.EditPlacement.events({
  'submit form': function(event) {
    event.preventDefault();
    const {
      _id, startDate, endDate, isActive, childId,
    } = event.target;
    Meteor.call(
      'placementUpdate',
      _id.value,
      new Date(startDate.value),
      endDate.value ? new Date(endDate.value) : null,
      isActive.value,
      childId.value,
      (error) => {
        showToast(error);
      }
    );
  },
});
