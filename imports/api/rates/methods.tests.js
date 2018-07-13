import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Rates } from './rates';
import './methods';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('rates methods', function() {
    beforeEach(function() {
      Rates.remove({});
    });

    it('can add a new link', function() {
      const addLink = Meteor.server.method_handlers.ratesInsert;

      addLink.apply({}, ['meteor.com', 15]);

      assert.equal(Rates.find().count(), 1);
    });
  });
}
