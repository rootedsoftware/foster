import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { showToast } from '../utilities';

export const Placements = new Mongo.Collection('placements');

export const removePlacement = (_id) => {
  Meteor.call('placementsRemove', _id, (error) => {
    showToast(error);
  });
};
