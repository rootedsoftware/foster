import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import toastr from 'toastr';

export const Contacts = new Mongo.Collection('contacts');

export const removeContact = (_id) => {
  Meteor.call('contactsRemove', _id, (error) => {
    if (error) {
      toastr.error(error.error);
    }
  });
};
