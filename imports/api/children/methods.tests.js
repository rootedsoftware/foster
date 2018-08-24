import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import Children from './children';
import { childInsert, childUpdate, childRemove } from './methods';
/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('children methods', function() {
    beforeEach(function() {
      Children.remove({});
    });

    it('can add a new child', function() {
      childInsert.run.call(
        { userId: 'abcd' },
        {
          age: 11,
          name: 'John',
        }
      );

      assert.equal(Children.find().count(), 1);
    });

    it('can update a child with matching editableBy and userId', function() {
      childInsert.run.call(
        { userId: 'dcba' },
        {
          age: 2,
          name: 'Beth',
        }
      );
      const child = Children.findOne();

      childUpdate.run.call(
        { userId: 'dcba' },
        {
          childId: child._id,
          age: 3,
          name: 'Bethany',
        }
      );

      assert.equal(Children.findOne({ editableBy: 'dcba' }).age, 3);
    });
    it('can remove a child with matching editableBy and userId', function() {
      childInsert.run.call(
        { userId: 'efgh' },
        {
          age: 9,
          name: 'Jerry',
        }
      );
      const child = Children.findOne();
      assert.equal(Children.findOne().name, 'Jerry');

      childRemove.run.call(
        { userId: 'efgh' },
        {
          childId: child._id,
        }
      );

      assert.equal(Children.findOne(), undefined);
    });
  });
}
