import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import Rates from './rates';
import { insertRate, updateRate, removeRate } from './methods';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('rates methods', function() {
    beforeEach(function() {
      Rates.remove({});
    });

    it('can add a new rate', function() {
      insertRate.run.call(
        { userId: 'aiiel349' },
        {
          name: 'Family',
          dailyAmount: 15,
        }
      );

      assert.equal(Rates.find().count(), 1);
    });

    it('can update a rate', function() {
      insertRate.run.call(
        { userId: 'adsfii32' },
        {
          name: 'Respite',
          dailyAmount: 30,
        }
      );

      const rate = Rates.findOne();

      updateRate.run.call(
        {
          userId: 'adsfii32',
        },
        {
          rateId: rate._id,
          name: 'Respite',
          dailyAmount: 20,
        }
      );

      assert.equal(Rates.findOne({ _id: rate._id }).dailyAmount, 20);
    });

    it('can remove a rate', function() {
      insertRate.run.call(
        { userId: 'adsfii32' },
        {
          name: 'Respite',
          dailyAmount: 30,
        }
      );

      assert.equal(
        Rates.findOne({ familyId: 'adsfii32', dailyAmount: 30 }).name,
        'Respite'
      );

      const rate = Rates.find();

      removeRate.run.call({ userId: 'sdfi3oc34' }, { rateId: rate._id });

      const checkRatesAgain = Rates.findOne({ familyId: 'sdfi3oc34' });

      assert.equal(checkRatesAgain, undefined);
    });
  });
}
