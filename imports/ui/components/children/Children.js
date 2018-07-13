import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import toastr from 'toastr';
import { Rates } from '../../../api/rates/rates';
import { Children, removeChild } from '../../../api/children/children';
import './Children.html';

Template.Children.onCreated(() => {
  Meteor.subscribe('children.all');
  Meteor.subscribe('rates.all');
});

Template.Children.helpers({
  children() {
    return Children.find({});
  },
  rates() {
    return Rates.find();
  },
});

Template.Children.events({
  'submit .child-add': function(event) {
    event.preventDefault();

    const { name, age, rateId } = event.target;

    Meteor.call(
      'childrenInsert',
      name.value,
      Number(age.value),
      rateId.value,
      (error) => {
        if (error) {
          toastr.error(error.error);
        } else {
          name.value = '';
          age.value = '';
          rateId.value = '';
        }
      }
    );
  },
  'click .removeChild': function() {
    removeChild(this._id);
  },
});
