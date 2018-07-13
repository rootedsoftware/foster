import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Children, removeChild } from '../../../api/children/children';
import './child.html';

Template.Child.onCreated(() => {
  Meteor.subscribe('child', FlowRouter.current().params.childId);
});

Template.Child.helpers({
  child() {
    return Children.findOne();
  },
});

Template.Child.events({
  'click .removeChild': function() {
    removeChild(this._id);
    FlowRouter.go('/children');
  },
  'click .editChild': function() {
    FlowRouter.go(`/child/edit?id=${this._id}`);
  },
});
