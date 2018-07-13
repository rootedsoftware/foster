import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Rates } from './rates';

Meteor.methods({
  ratesInsert(name, dailyAmount) {
    check(name, String);
    check(dailyAmount, Number);

    return Rates.insert({
      name,
      dailyAmount,
    });
  },
  'rates.remove': function(_id) {
    check(_id, String);
    return Rates.remove({
      _id,
    });
  },
  'rates.update': function(_id, dailyAmount, name) {
    check(_id, String);
    check(dailyAmount, String);
    check(name, String);
    return Rates.update({ _id }, { $set: { dailyAmount, name } });
  },
});
