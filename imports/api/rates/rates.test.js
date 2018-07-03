// Tests for the behavior of the rates collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Rates } from './rates.js';

if (Meteor.isServer) {
  describe('rates collection', function () {
    it('insert correctly', function () {
      const rateId = Rates.insert({
        name: 'Respite',
        dailyAmount: 15,
      });
      const added = Rates.find({ _id: rateId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'rates');
      assert.equal(count, 1);
    });
  });
}
