// Methods related to rates

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Rates } from './rates';

Meteor.methods({
  'rates.insert'(name, dailyAmount) {
    check(name, String);
    check(dailyAmount, Number);

    return Rates.insert({
      name,
      dailyAmount,
    });
  },
  'rates.remove'(_id) {
    check(_id, String);
    return Rates.remove({
      _id
    });
  },
  'rates.update'(_id, dailyAmount, name) {
    check(dailyAmount, String);
    check(name, String);
    return Rates.update({_id}, { $set: { dailyAmount, name } });
  },
});
