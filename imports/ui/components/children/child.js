import { Children, removeChild } from '../../../api/children/children';
import { Meteor } from 'meteor/meteor';
import './child.html';

Template.Child.onCreated(function() {
  Meteor.subscribe('child', FlowRouter.current().params.childId);
});

Template.Child.helpers({
  child() {
    return Children.findOne();
  }
});

Template.Child.events({
  'click .removeChild'() {
    removeChild(this._id);
    FlowRouter.go('/children');
  },
  'click .editChild'() {
    FlowRouter.go(`/child/edit?id=${this._id}`);
  }
})