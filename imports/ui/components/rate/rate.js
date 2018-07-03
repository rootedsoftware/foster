import { Rates } from '/imports/api/rates/rates.js';
import { Meteor } from 'meteor/meteor';
import './rate.html';

Template.Rate.onCreated(function() {
  Meteor.subscribe('rate', FlowRouter.current().params.rateId);
});

Template.Rate.helpers({
  rate() {
    return Rates.findOne();
  }
});