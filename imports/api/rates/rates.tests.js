import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Rates } from './rates';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('rates collection', function() {
    it('insert correctly', function() {
      const rateId = Rates.insert({
        name: 'Family',
        dailyAmount: 20,
      });
      const added = Rates.find({ _id: rateId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'rates');
      assert.equal(count, 1);
    });
  });
}
