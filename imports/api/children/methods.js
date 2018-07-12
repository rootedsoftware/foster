// Methods related to children

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Children } from './children';

Meteor.methods({
  'children.insert'(name, age, rateId) {
    check(name, String);
    check(age, Number);
    check(rateId, String);

    return Children.insert({
      name,
      age,
      rateId
    });
  },
  'children.remove'(_id) {
    check(_id, String);
    return Children.remove({
      _id
    });
  },
  'child.update'(_id, age, name) {
    check(age, String);
    check(name, String);
    return Children.update({_id}, { $set: { age, name } });
  },
});
