import { Template } from 'meteor/templating';
import './EditRate.html';
import Rates from '../../../api/rates/rates';
import { updateRate } from '../../../api/rates/methods';
import { showToast } from '../../../api/utilities';

Template.EditRate.onCreated(function() {
  this.autorun(() => this.subscribe('rate', FlowRouter.current().params.rateId));
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
    updateRate.call(
      {
        rateId: _id.value,
        dailyAmount:
          dailyAmount && dailyAmount.value && Number(dailyAmount.value),
        name: name.value,
      },
      (error) => {
        showToast(error);
      }
    );
  },
});
