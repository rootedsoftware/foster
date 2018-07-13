import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Placements = new Mongo.Collection('placements');

export const removePlacement = (_id) => {
  Meteor.call('placementsRemove', _id, (error) => {
    if (error) {
      alert(error.error);
    }
  });
};
