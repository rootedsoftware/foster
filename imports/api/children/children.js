import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Children = new Mongo.Collection('children');

export const removeChild = (_id) => {
  Meteor.call('childrenRemove', _id, (error) => {
    if (error) {
      alert(error.error);
    }
  });
};