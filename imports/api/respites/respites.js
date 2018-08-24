import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { showToast } from '../utilities';

export const Respites = new Mongo.Collection('respites');

export const removeRespite = (_id) => {
  Meteor.call('respitesRemove', _id, (error) => {
    showToast(error);
  });
};
