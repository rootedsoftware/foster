import { assert } from 'chai';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import Children from '../children';
import './publications';

/* eslint prefer-arrow-callback: "off" */

describe('children publications', function() {
  beforeEach(function() {
    Children.remove({});
    Children.insert({
      name: 'Johnny',
      age: 5,
    });
  });

  describe('children.all', function() {
    it('sends all children', function(done) {
      const collector = new PublicationCollector();
      collector.collect('children.all', (collections) => {
        assert.equal(collections.children.length, 1);
        done();
      });
    });
  });
});
