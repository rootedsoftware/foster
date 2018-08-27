import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './EditRate.html';
import Rates from '../../../api/rates/rates';
import { showToast } from '../../../api/utilities';

Template.EditRate.onCreated(() => {
  Meteor.subscribe('rate', FlowRouter.current().params.rateId);
});

Template.EditRate.helpers({
  rate() {
    return Rates.findOne();
  },
});

Template.EditRate.events({
  'submit form': function(event) {
    event.preventDefault();
    const { _id, dailyAmount, name } = event.target;
    Meteor.call(
      'updateRate',
      _id.value,
      dailyAmount.value,
      name.value,
      (error) => {
        showToast(error);
      }
    );
  },
});
