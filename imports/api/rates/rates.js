// Definition of the rates collection

import { Mongo } from 'meteor/mongo';

export const Rates = new Mongo.Collection('rates');


export const removeRate = (_id) => {
  Meteor.call('rates.remove', _id, (error) => {
    if (error) {
      alert(error.error);
    }
  });
}