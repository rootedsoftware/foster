import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Rates } from '../rates';

Meteor.publish('rates.all', () => Rates.find());

Meteor.publish('rate', (_id) => {
  check(_id, String);
  return Rates.find({ _id });
});
