import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import {
  Placements,
  removePlacement
} from '../../../api/placements/placements';
import './Placement.html';
import { Children } from '../../../api/children/children';

Template.Placement.onCreated(() => {
  Meteor.subscribe('placement', FlowRouter.current().params.placementId);
  Meteor.subscribe('children.all');
});

Template.Placement.helpers({
  childName() {
    const child = Children.findOne({ _id: this.childId });
    return child && child.name;
  },
  placement() {
    return Placements.findOne();
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
