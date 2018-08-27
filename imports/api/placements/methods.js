import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import Placements from './placements';

export const placementInsert = new ValidatedMethod({
  name: 'placement.insert',
  validate: new SimpleSchema({
    startDate: { type: Date },
    endDate: { type: Date, optional: true },
    isActive: { type: Boolean },
    rateId: { type: String, optional: true },
  }).validator(),
  run({
    startDate, endDate, isActive, rateId,
  }) {
    if (!this.userId) {
      throw new Meteor.Error(
        'placement.insert.unauthorized',
        'Must be logged in'
      );
    }

    Placements.insert({
      familyId: this.userId,
      startDate,
      endDate,
      isActive,
      rateId,
    });
  },
});

export const placementUpdate = new ValidatedMethod({
  name: 'placement.update',
  validate: new SimpleSchema({
    _id: { type: String },
    startDate: { type: Date, optional: true },
    endDate: { type: Date, optional: true },
    isActive: { type: Boolean, optional: true },
    childId: { type: String },
    rateId: { type: String, optional: true },
  }).validator(),
  run({
    _id, startDate, endDate, isActive, childId, rateId,
  }) {
    if (!this.userId) {
      throw new Meteor.Error(
        'placement.update.unauthorized',
        'Must be logged in'
      );
    }

    Placements.update(
      { familyId: this.userId, _id },
      {
        $set: {
          startDate,
          endDate,
          isActive,
          childId,
          rateId,
        },
      }
    );
  },
});

export const placementRemove = new ValidatedMethod({
  name: 'placement.remove',
  validate: new SimpleSchema({
    placementId: { type: String },
  }).validator(),
  run({ placementId }) {
    if (!this.userId) {
      throw new Meteor.Error(
        'placment.remove.unathorized',
        'Must be logged in'
      );
    }

    Placements.remove({ familyId: this.userId, _id: placementId });
  },
});
