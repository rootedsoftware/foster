import './EditRate.html';
import { Rates } from '../../../api/rates/rates';

Template.EditRate.onCreated(function() {
  Meteor.subscribe('rate', FlowRouter.current().params.rateId);
});

Template.EditRate.helpers({
  rate: function() {
    return Rates.findOne();
  }
});

Template.EditRate.events({
  'submit form'(event) {
    event.preventDefault()
    const { _id, dailyAmount, name } = event.target;
    Meteor.call('rates.update', _id.value, dailyAmount.value, name.value, function(error) {
      if (error) {
        alert(error.error);
      } else {
        alert('Updated');
      }
    });
  }
})