import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import toastr from 'toastr';

export const Rates = new Mongo.Collection('rates');

export const removeRate = (_id) => {
  Meteor.call('rates.remove', _id, (error) => {
    if (error) {
      toastr.error(error.error);
    }
  });
};
