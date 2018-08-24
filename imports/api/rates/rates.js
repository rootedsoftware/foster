import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { showToast } from '../utilities';

export const Rates = new Mongo.Collection('rates');

export const removeRate = (_id) => {
  Meteor.call('rates.remove', _id, (error) => {
    showToast(error);
  });
};
