import { Template } from 'meteor/templating';
import {
  Placements,
  removePlacement
} from '../../../api/placements/placements';
import './Placement.html';
import Children from '../../../api/children/children';
import { Rates } from '../../../api/rates/rates';

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
    removePlacement(this._id);
    FlowRouter.go('/placements');
  },
  'click .editPlacement': function() {
    FlowRouter.go(`/placement/edit?id=${this._id}`);
  },
});
