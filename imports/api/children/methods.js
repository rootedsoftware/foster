import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Children } from './children';

Meteor.methods({
  'children.insert': function(name, age, rateId) {
    check(name, String);
    check(age, Number);
    check(rateId, Match.Maybe(String));

    return Children.insert({
      name,
      age,
      rateId,
    });
  },
  'children.remove': function(_id) {
    check(_id, String);
    return Children.remove({
      _id,
    });
  },
  'child.update': function(_id, age, name) {
    check(_id, String);
    check(age, String);
    check(name, String);
    return Children.update({ _id }, { $set: { age, name } });
  },
});
