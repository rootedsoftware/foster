import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import toastr from 'toastr';

export const Respites = new Mongo.Collection('respites');

export const removeRespite = (_id) => {
  Meteor.call('respitesRemove', _id, (error) => {
    if (error) {
      toastr.error(error.error);
    }
  });
};
