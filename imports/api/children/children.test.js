import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Children } from './children';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('children collection', function() {
    it('insert correctly', function() {
      const childId = Children.insert({
        name: 'Johnny',
        age: 15,
      });
      const added = Children.find({ _id: childId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'children');
      assert.equal(count, 1);
    });
  });
}
