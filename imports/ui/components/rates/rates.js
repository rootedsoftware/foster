import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Rates from '../../../api/rates/rates';
import './rates.html';
import { showToast } from '../../../api/utilities';

Template.Rates.onCreated(function() {
  this.autorun(() => {
    this.subscribe('rates.all');
  });
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

    Meteor.call('insertRate', name.value, Number(dailyAmount.value), (error) => {
      showToast(error);
      if (!error) {
        name.value = '';
        dailyAmount.value = '';
      }
    });
  },
  'click .removeRate': function() {
    Meteor.call('removeRate', this._id, (error) => {
      if (error) {
        showToast(error);
      }
    });
  },
});
