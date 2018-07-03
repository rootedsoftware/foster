import { Rates } from '/imports/api/rates/rates.js';
import { Meteor } from 'meteor/meteor';
import './rates.html';

Template.Rates.onCreated(function () {
  Meteor.subscribe('rates.all');
});

Template.Rates.helpers({
  rates() {
    return Rates.find({});
  },
});

Template.Rates.events({
  'submit .rate-add'(event) {
    event.preventDefault();

    const target = event.target;
    const { name, dailyAmount } = target;

    Meteor.call('rates.insert', name.value, Number(dailyAmount.value), (error) => {
      if (error) {
        alert(error.error);
      } else {
        name.value = '';
        dailyAmount.value = '';
      }
    });
  },
});
