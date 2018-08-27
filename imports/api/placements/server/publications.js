import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Placements from '../placements';

Meteor.publish('placements.all', function() {
  if (!this.userId) {
    throw new Meteor.Error(
      'placements.all.publish.unauthorized',
      'Must be logged in'
    );
  }
  return Placements.find({ familyId: this.userId });
});

Meteor.publish('placement', (_id) => {
  check(_id, String);
  if (!this.userId) {
    throw new Meteor.Error(
      'placement.publish.unauthorized',
      'Must be logged in'
    );
  }
  return Placements.find({ _id, familyId: this.userId });
});

Meteor.publish('placementByMonth', (month, year, currentYearMonth) => {
  check(month, Number);
  check(year, Number);
  check(currentYearMonth, String);

  if (!this.userId) {
    throw new Meteor.Error(
      'placementByMonth.publish.unauthorized',
      'Must be logged in'
    );
  }
  const startOfMonth = `${String(year)}-${String(month)}-01`;
  const endOfMonth = `${String(year)}-${String(month)}-${new Date(
    year,
    month,
    0
  ).getDate()}`;

  const commonQuery = {
    familyId: this.userId,
    startDate: {
      $lte: new Date(endOfMonth),
    },
    $or: [
      {
        endDate: null,
      },
      {
        endDate: { $gte: new Date(startOfMonth) },
      },
    ],
  };
  return Placements.find(commonQuery);
});
