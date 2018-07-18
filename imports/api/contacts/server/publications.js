import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contacts } from '../contacts';

Meteor.publish('contacts.all', () => Contacts.find());

Meteor.publish('contact', (_id) => {
  check(_id, String);
  return Contacts.find({ _id });
});
