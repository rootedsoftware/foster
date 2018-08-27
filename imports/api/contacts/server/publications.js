import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Contacts from '../contacts';

Meteor.publish('contacts.all', function() {
  if (!this.userId) {
    throw new Meteor.Error(
      'contacts.all.publish.unauthorized',
      'Must be logged in'
    );
  }
  return Contacts.find({ familyId: this.userId });
});

Meteor.publish('contact', function(_id) {
  check(_id, String);

  if (!this.userId) {
    throw new Meteor.Error('contact.publish.unauthorized', 'Must be logged in');
  }

  return Contacts.find({ _id, familyId: this.userId });
});
