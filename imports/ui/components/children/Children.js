import { Children, removeChild } from '/imports/api/children/children.js';
import { Meteor } from 'meteor/meteor';
import './Children.html';

Template.Children.onCreated(function () {
  Meteor.subscribe('children.all');
});

Template.Children.helpers({
  children() {
    return Children.find({});
  },
});

Template.Children.events({
  'submit .child-add'(event) {
    event.preventDefault();

    const { name, age } = event.target;

    Meteor.call('children.insert', name.value, Number(age.value), (error) => {
      if (error) {
        alert(error.error);
      } else {
        name.value = '';
        age.value = '';
      }
    });
  },
  'click .removeChild'() {
    removeChild(this._id);
  }
});
