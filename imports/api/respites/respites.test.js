import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Respites } from './respites';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('respites collection', function() {
    it('inserts respite correctly', function() {
      const respiteId = Respites.insert({
        childId: '8Sf912SSfsdfi',
        startDate: new Date(),
        endDate: new Date(),
        isActive: true,
      });
      const added = Respites.find({ _id: respiteId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'respites');
      assert.equal(count, 1);
    });
  });
}
