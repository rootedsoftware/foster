import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Children from '../children';

Meteor.publish('children.all', function() {
  return this.userId && Children.find({ editableBy: this.userId });
});

Meteor.publish('child', function(_id) {
  check(_id, String);

  return this.userId && Children.find({ _id, editableBy: this.userId });
});
