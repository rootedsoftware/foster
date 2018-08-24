import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Rates, removeRate } from '../../../api/rates/rates';
import './rates.html';
import { showToast } from '../../../api/utilities';

Template.Rates.onCreated(() => {
  Meteor.subscribe('rates.all');
});

Template.Rates.helpers({
  rates() {
    return Rates.find({});
  },
});

Template.Rates.events({
  'submit .rate-add': function(event) {
    event.preventDefault();

    const { target } = event;
    const { name, dailyAmount } = target;

    Meteor.call('ratesInsert', name.value, Number(dailyAmount.value), (error) => {
      showToast(error);
      if (!error) {
        name.value = '';
        dailyAmount.value = '';
      }
    });
  },
  'click .removeRate': function() {
    removeRate(this._id);
  },
});
