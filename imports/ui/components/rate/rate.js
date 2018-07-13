import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Rates, removeRate } from '../../../api/rates/rates';
import './rate.html';

Template.Rate.onCreated(() => {
  Meteor.subscribe('rate', FlowRouter.current().params.rateId);
});

Template.Rate.helpers({
  rate() {
    return Rates.findOne();
  },
});

Template.Rate.events({
  'click .removeRate': function() {
    removeRate(this._id);
    FlowRouter.go('/rates');
  },
  'click .editRate': function() {
    FlowRouter.go(`/rates/edit?id=${this._id}`);
  },
});
