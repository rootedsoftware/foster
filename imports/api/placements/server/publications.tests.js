import { assert } from 'chai';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import Placements from '../placements';
import './publications';

/* eslint prefer-arrow-callback: "off" */

describe('placements publications', function() {
  beforeEach(function() {
    Placements.remove({});
    Placements.insert({
      familyId: 'asds99s',
      childId: '8Sf912SSfsdfi',
      startDate: new Date(),
      endDate: new Date(),
      isActive: true,
    });
  });

  describe('placements.all', function() {
    it('sends all placements', function(done) {
      const collector = new PublicationCollector({ userId: 'asds99s' });
      collector.collect('placements.all', (collections) => {
        assert.equal(collections.placements.length, 1);
        done();
      });
    });
  });
});
