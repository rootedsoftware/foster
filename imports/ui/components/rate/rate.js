import { Template } from 'meteor/templating';
import { showToast } from '../../../api/utilities';
import Rates from '../../../api/rates/rates';
import { removeRate } from '../../../api/rates/methods';
import './rate.html';

Template.Rate.onCreated(function() {
  this.autorun(() => this.subscribe('rate', FlowRouter.current().params.rateId));
});

Template.Rate.helpers({
  rate() {
    return Rates.findOne();
  },
});

Template.Rate.events({
  'click .removeRate': function() {
    removeRate.call({ rateId: this._id }, (error) => {
      if (error) {
        showToast(error);
      } else {
        FlowRouter.go('/rates');
      }
    });
  },
  'click .editRate': function() {
    FlowRouter.go(`/rates/edit?id=${this._id}`);
  },
});
