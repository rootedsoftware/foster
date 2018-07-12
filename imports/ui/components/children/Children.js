import { Children, removeChild } from '/imports/api/children/children.js';
import { Rates } from '/imports/api/rates/rates.js';
import { Meteor } from 'meteor/meteor';
import './Children.html';

Template.Children.onCreated(function () {
  Meteor.subscribe('children.all');
  Meteor.subscribe('rates.all');
});

Template.Children.helpers({
  children() {
    return Children.find({});
  },
  rates() {
    return Rates.find();
  }
});

Template.Children.events({
  'submit .child-add'(event) {
    event.preventDefault();

    const { name, age, rateId } = event.target;

    Meteor.call('children.insert', name.value, Number(age.value), rateId.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        name.value = '';
        age.value = '';
        rateId.value = '';
      }
    });
  },
  'click .removeChild'() {
    removeChild(this._id);
  }
});
