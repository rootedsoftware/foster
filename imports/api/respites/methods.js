import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Respites } from './respites';

Meteor.methods({
  respitesInsert(startDate, endDate, isActive, childId, rateId) {
    check(startDate, Date);
    check(endDate, Match.Maybe(Date));
    check(isActive, Boolean);
    check(childId, String);
    check(rateId, Match.Maybe(String));

    return Respites.insert({
      startDate,
      endDate,
      isActive,
      childId,
      rateId,
    });
  },
  respitesRemove(_id) {
    check(_id, String);
    return Respites.remove({
      _id,
    });
  },
  respiteUpdate(_id, startDate, endDate, isActive, childId, rateId) {
    check(_id, String);
    check(startDate, Match.Maybe(Date));
    check(endDate, Match.Maybe(Date));
    check(isActive, Match.Maybe(Boolean));
    check(childId, Match.Maybe(String));
    check(rateId, Match.Maybe(String));

    const updateObject = {
      startDate: startDate || null,
      endDate: endDate || null,
      isActive: isActive || null,
      childId: childId || null,
      rateId: rateId || null,
    };

    return Respites.update(
      {
        _id,
      },
      {
        $set: updateObject,
      }
    );
  },
});
