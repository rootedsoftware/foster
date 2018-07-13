import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Children } from './children';

Meteor.methods({
  childrenInsert(name, age) {
    check(name, String);
    check(age, Number);

    return Children.insert({
      name,
      age,
    });
  },
  childrenRemove(_id) {
    check(_id, String);
    return Children.remove({
      _id,
    });
  },
  childUpdate(_id, age, name) {
    check(_id, String);
    check(age, String);
    check(name, String);
    return Children.update({ _id }, { $set: { age, name } });
  },
});
