import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import Placements from './placements';
import { placementInsert, placementUpdate, placementRemove } from './methods';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('placements methods', function() {
    beforeEach(() => {
      Placements.remove({});
    });

    it('can add a new placement', function() {
      placementInsert.run.call(
        { userId: '23244ssd' },
        {
          startDate: new Date(),
          endDate: new Date(),
          isActive: false,
          rateId: 's33si34',
        }
      );

      assert.equal(Placements.find().count(), 1);
    });

    it('can update a placement', function() {
      placementInsert.run.call(
        { userId: '23244ssd' },
        {
          startDate: new Date(),
          endDate: new Date(),
          isActive: false,
          rateId: 's33si34',
        }
      );

      const placement = Placements.findOne();

      placementUpdate.run.call(
        { userId: '23244ssd' },
        {
          _id: placement._id,
          rateId: 'sdfIiK99',
        }
      );

      assert.equal(
        Placements.findOne({ _id: placement._id }).rateId,
        'sdfIiK99'
      );
    });

    it('has no effect when trying to update someone elses placement', function() {
      placementInsert.run.call(
        { userId: 'asdI922' },
        {
          startDate: new Date(),
          endDate: new Date(),
          isActive: false,
          rateId: 's33si34',
        }
      );

      const placement = Placements.findOne();

      placementUpdate.run.call(
        { userId: 'notTheRightID' },
        { _id: placement._id, rateId: 'ere9x' }
      );

      assert.equal(Placements.findOne({ rateId: 'ere9x' }), undefined);
    });

    it('can remove a placement', function() {
      placementInsert.run.call(
        { userId: 'skdiIsd00' },
        {
          startDate: new Date(),
          endDate: new Date(),
          isActive: false,
          rateId: 'sdfi34',
        }
      );
      const placement = Placements.findOne();

      placementRemove.run.call(
        {
          userId: 'skdiIsd00',
        },
        { placementId: placement._id }
      );

      assert.equal(Placements.findOne(), undefined);
    });
  });
}
