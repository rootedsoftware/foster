import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Placements } from './placements';

Meteor.methods({
  placementsInsert(startDate, endDate, isActive, childId) {
    check(startDate, Date);
    check(endDate, Match.Maybe(Date));
    check(isActive, Boolean);
    check(childId, String);

    return Placements.insert({
      startDate,
      endDate,
      isActive,
      childId,
    });
  },
  placementsRemove(_id) {
    check(_id, String);
    return Placements.remove({
      _id,
    });
  },
  'placement.update': function(_id, startDate, endDate, isActive, childId) {
    check(_id, String);
    check(startDate, Match.Maybe(Date));
    check(endDate, Match.Maybe(Date));
    check(isActive, Match.Maybe(Boolean));
    check(childId, Match.Maybe(Boolean));

    const updateObject = {
      startDate: startDate || null,
      endDate: endDate || null,
      isActive: isActive || null,
      childId: childId || null,
    };

    return Placements.update(
      {
        _id,
      },
      {
        $set: updateObject,
      }
    );
  },
});
