import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Rates from '../rates';

Meteor.publish('rates.all', function() {
  if (!this.userId) {
    throw new Meteor.Error(
      'rates.all.publish.unauthorized',
      'Must be logged in'
    );
  }
  return Rates.find({ familyId: this.userId });
});

Meteor.publish('rate', function(_id) {
  check(_id, String);

  if (!this.userId) {
    throw new Meteor.Error('rate.publish.unauthorized', 'Must be logged in');
  }
  return Rates.find({ familyId: this.userId, _id });
});
