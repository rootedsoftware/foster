import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Placements from '../../../api/placements/placements';
import { placementRemove } from '../../../api/placements/methods';
import './Placement.html';
import Children from '../../../api/children/children';
import Rates from '../../../api/rates/rates';
import { showToast } from '../../../api/utilities';

Template.Placement.onCreated(function() {
  this.autorun(() => {
    this.subscribe('placement', FlowRouter.current().params.placementId);
    this.subscribe('children.all');
    this.subscribe('rates.all');
  });
});

Template.Placement.helpers({
  childName() {
    const child = Children.findOne({ _id: this.childId });
    return child && child.name;
  },
  placement() {
    return Placements.findOne();
  },
  reimbursementRate() {
    const rate = Rates.findOne({ _id: this.rateId });
    return rate && rate.dailyAmount;
  },
});

Template.Placement.events({
  'click .removePlacement': function() {
    placementRemove.call({ placementId: this._id }, (error) => {
      if (error) {
        showToast(error);
      } else {
        FlowRouter.go('/placements');
      }
    });
  },
  'click .editPlacement': function() {
    FlowRouter.go(`/placement/edit?id=${this._id}`);
  },
});
