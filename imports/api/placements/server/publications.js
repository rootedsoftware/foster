import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Placements } from '../placements';

Meteor.publish('placements.all', () => Placements.find());

Meteor.publish('placement', (_id) => {
  check(_id, String);

  return Placements.find({ _id });
});
