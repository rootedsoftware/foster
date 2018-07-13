import { assert } from 'chai';
import { Placements } from '../placements.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('placements publications', function () {
  beforeEach(function () {
    Placements.remove({});
    Placements.insert({
      childId: '8Sf912SSfsdfi',
      startDate: new Date(),
      endDate: new Date(),
      isActive: true
    });
  });

  describe('placements.all', function () {
    it('sends all placements', function (done) {
      const collector = new PublicationCollector();
      collector.collect('placements.all', (collections) => {
        assert.equal(collections.placements.length, 1);
        done();
      });
    });
  });
});
