import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Children from '../children';

Meteor.publish('children.all', function() {
  if (!this.userId) {
    throw new Meteor.Error(
      'children.all.publish.unauthorized',
      'Must be logged in'
    );
  }
  return Children.find({ familyId: this.userId });
});

Meteor.publish('child', function(_id) {
  check(_id, String);

  if (!this.userId) {
    throw new Meteor.Error('child.publish.unauthorized', 'Must be logged in');
  }

  return Children.find({ _id, familyId: this.userId });
});
