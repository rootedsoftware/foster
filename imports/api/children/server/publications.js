import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Children } from '../children';

Meteor.publish('children.all', () => Children.find());

Meteor.publish('child', (_id) => {
  check(_id, String);
  return Children.find({ _id });
});
