import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Contacts from '../contacts';

Meteor.publish('contacts.all', function() {
  return this.userId && Contacts.find();
});

Meteor.publish('contact', function(_id) {
  check(_id, String);
  return this.userId && Contacts.find({ _id, editableBy: this.userId });
});
