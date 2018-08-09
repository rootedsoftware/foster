import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Respites } from '../respites';

Meteor.publish('respites.all', () => Respites.find());

Meteor.publish('respites', (_id) => {
  check(_id, String);
  return Respites.find({ _id });
});

Meteor.publish('respitesByMonth', (month, year, currentYearMonth) => {
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
  return Respites.find(commonQuery);
});
