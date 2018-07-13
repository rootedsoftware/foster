import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import toastr from 'toastr';

export const Placements = new Mongo.Collection('placements');

export const removePlacement = (_id) => {
  Meteor.call('placementsRemove', _id, (error) => {
    if (error) {
      toastr.error(error.error);
    }
  });
};
