import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Placements } from './placements';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('placements collection', function() {
    it('inserts placement correctly', function() {
      const placementId = Placements.insert({
        childId: '8Sf912SSfsdfi',
        startDate: new Date(),
        endDate: new Date(),
        isActive: true,
      });
      const added = Placements.find({ _id: placementId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'placements');
      assert.equal(count, 1);
    });
  });
}
