import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Children, removeChild } from '../../../api/children/children';
import './Children.html';
import { showToast } from '../../../api/utilities';

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
      showToast(error);
      if (!error) {
        name.value = '';
        age.value = '';
      }
    });
  },
  'click .removeChild': function() {
    removeChild(this._id);
  },
});
