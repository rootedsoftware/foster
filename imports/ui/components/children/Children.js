import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import toastr from 'toastr';
import { Children, removeChild } from '../../../api/children/children';
import './Children.html';

Template.Children.onCreated(() => {
  Meteor.subscribe('children.all');
});

Template.Children.helpers({
  children() {
    return Children.find({});
  },
});

Template.Children.events({
  'submit .child-add': function(event) {
    event.preventDefault();

    const { name, age } = event.target;

    Meteor.call('childrenInsert', name.value, Number(age.value), (error) => {
      if (error) {
        toastr.error(error.error);
      } else {
        name.value = '';
        age.value = '';
      }
    });
  },
  'click .removeChild': function() {
    removeChild(this._id);
  },
});
