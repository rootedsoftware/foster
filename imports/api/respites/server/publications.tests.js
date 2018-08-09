import { assert } from 'chai';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Respites } from '../respites';
import './publications';

/* eslint prefer-arrow-callback: "off" */

describe('respites publications', function() {
  beforeEach(function() {
    Respites.remove({});
    Respites.insert({
      childId: '8Sf912SSfsdfi',
      startDate: new Date(),
      endDate: new Date(),
      isActive: true,
    });
  });

  describe('respites.all', function() {
    it('sends all respites', function(done) {
      const collector = new PublicationCollector();
      collector.collect('respites.all', (collections) => {
        assert.equal(collections.respites.length, 1);
        done();
      });
    });
  });
});
