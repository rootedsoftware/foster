import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { moment } from 'moment';
import { Placements } from '../placements';

Meteor.publish('placements.all', () => Placements.find());

Meteor.publish('placement', (_id) => {
  check(_id, String);
  return Placements.find({ _id });
});

Meteor.publish('placementByMonth', (month, year, currentYearMonth) => {
  check(month, Number);
  check(year, Number);
  check(currentYearMonth, String);

  const startOfMonth = `${String(year)}-${String(month)}`;
  const endOfMonth = `${String(year)}-${String(month)}-${new Date(
    year,
    month,
    0
  ).getDate()}`;

  const commonQuery = [
    {
      startDate: {
        $gte: new Date(startOfMonth),
      },
    },
    {
      endDate: {
        $gte: new Date(startOfMonth),
      },
    },
  ];
  if (currentYearMonth === startOfMonth) {
    return Placements.find({
      $or: [...commonQuery, { isActive: true }],
    });
  }
  // TODO: do the same as above, but you'll need a different query (maybe) for finding those not in the current month

  return Placements.find({ commonQuery });
});
