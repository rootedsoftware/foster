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
});
