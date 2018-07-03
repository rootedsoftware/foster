// All rates-related publications

import { Meteor } from 'meteor/meteor';
import { Rates } from '../rates.js';

Meteor.publish('rates.all', function () {
  return Rates.find();
});

Meteor.publish('rate', function (_id) {
  console.log(`got to rate subscription with _id: ${_id}`)
  return Rates.find({_id});
});
