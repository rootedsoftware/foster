import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { showToast } from '../utilities';

export const Contacts = new Mongo.Collection('contacts');

export const removeContact = (_id) => {
  Meteor.call('contactsRemove', _id, (error) => {
    showToast(error);
  });
};
