import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import Rates from './rates';

export const insertRate = new ValidatedMethod({
  name: 'insert.rate',
  validate: new SimpleSchema({
    name: { type: String },
    dailyAmount: { type: String },
  }).validator(),
  run({ name, dailyAmount }) {
    if (!this.userId) {
      throw new Meteor.Error('rate.insert.unathorized', 'Must be logged in');
    }
    Rates.insert({ familyId: this.userId, name, dailyAmount });
  },
});

export const updateRate = new ValidatedMethod({
  name: 'update.rate',
  validate: new SimpleSchema({
    rateId: { type: String },
    name: { type: String, optional: true },
    dailyAmount: { type: Number, optional: true },
  }).validator(),
  run({ rateId, name, dailyAmount }) {
    if (!this.userId) {
      throw new Meteor.Error('rate.update.unauthorized', 'Must be logged in');
    }

    Rates.update(
      { familyId: this.userId, _id: rateId },
      { $set: { name, dailyAmount } }
    );
  },
});

export const removeRate = new ValidatedMethod({
  name: 'remove.rate',
  validate: new SimpleSchema({
    rateId: { type: String },
  }).validator(),
  run({ rateId }) {
    if (!this.userId) {
      throw new Meteor.Error('remove.rate.unauthorized', 'Must be logged in');
    }

    Rates.remove({ familyId: this.userId, _id: rateId });
  },
});
