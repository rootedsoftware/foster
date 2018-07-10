// All children-related publications

import { Meteor } from 'meteor/meteor';
import { Children } from '../children.js';

Meteor.publish('children.all', function () {
  return Children.find();
});

Meteor.publish('child', function (_id) {
  return Children.find({_id});
});
