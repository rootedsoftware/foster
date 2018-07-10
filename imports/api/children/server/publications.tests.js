// Tests for the children publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'chai';
import { Children } from '../children.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('children publications', function () {
  beforeEach(function () {
    Children.remove({});
    Children.insert({
      name: 'Johnny',
      age: 5,
    });
  });

  describe('children.all', function () {
    it('sends all children', function (done) {
      const collector = new PublicationCollector();
      collector.collect('children.all', (collections) => {
        assert.equal(collections.children.length, 1);
        done();
      });
    });
  });
});
