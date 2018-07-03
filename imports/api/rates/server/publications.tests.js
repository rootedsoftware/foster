// Tests for the rates publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'chai';
import { Rates } from '../rates.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('rates publications', function () {
  beforeEach(function () {
    Rates.remove({});
    Rates.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com',
    });
  });

  describe('rates.all', function () {
    it('sends all rates', function (done) {
      const collector = new PublicationCollector();
      collector.collect('rates.all', (collections) => {
        assert.equal(collections.rates.length, 1);
        done();
      });
    });
  });
});
