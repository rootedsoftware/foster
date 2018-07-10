// Tests for rates methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Rates } from './rates.js';
import './methods.js';

if (Meteor.isServer) {
  describe('rates methods', function () {
    beforeEach(function () {
      Rates.remove({});
    });

    it('can add a new link', function () {
      const addLink = Meteor.server.method_handlers['rates.insert'];

      addLink.apply({}, ['meteor.com', 15]);

      assert.equal(Rates.find().count(), 1);
    });
  });
}
