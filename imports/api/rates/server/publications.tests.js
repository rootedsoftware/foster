import { assert } from 'chai';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import Rates from '../rates';
import './publications';

/* eslint prefer-arrow-callback: "off" */

describe('rates publications', function() {
  beforeEach(function() {
    Rates.remove({});
    Rates.insert({
      familyId: 'ssidid44',
      name: 'Family Foster',
      dailyAmount: 45,
    });
  });

  describe('rates.all', function() {
    it('sends all rates', function(done) {
      const collector = new PublicationCollector({ userId: 'ssidid44' });
      collector.collect('rates.all', (collections) => {
        assert.equal(collections.rates.length, 1);
        done();
      });
    });
  });
});
