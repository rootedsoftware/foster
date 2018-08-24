import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import Children from './children';

export const childUpdate = new ValidatedMethod({
  name: 'child.update',
  validate: new SimpleSchema({
    childId: { type: String },
    age: { type: Number },
    name: { type: String },
  }).validator(),
  run({ childId, age, name }) {
    const child = Children.findOne(childId);

    if (
      !this.userId
      || !child
      || !child.editableBy
      || child.editableBy !== this.userId
    ) {
      throw new Meteor.Error(
        'child.update.unauthorized',
        'Cannot edit that child'
      );
    }

    Children.update(childId, {
      $set: { age, name },
    });
  },
});

export const childInsert = new ValidatedMethod({
  name: 'child.insert',
  validate: new SimpleSchema({
    age: { type: Number },
    name: { type: String },
  }).validator(),
  run({ age, name }) {
    if (!this.userId) {
      throw new Meteor.Error('child.insert.unauthorized', 'Must be logged in');
    }

    Children.insert({ age, name, editableBy: this.userId });
  },
});

export const childRemove = new ValidatedMethod({
  name: 'child.remove',
  validate: new SimpleSchema({
    childId: { type: String },
  }).validator(),
  run({ childId }) {
    const child = Children.findOne(childId);

    if (!this.userId || this.userId !== child.editableBy) {
      throw new Meteor.Error('child.remove.unauthorized', 'Not authorized');
    }

    Children.remove(childId);
  },
});
