import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
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

  const startOfMonth = `${String(year)}-${String(month)}-01`;
  const endOfMonth = `${String(year)}-${String(month)}-${new Date(
    year,
    month,
    0
  ).getDate()}`;

  const commonQuery = {
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
