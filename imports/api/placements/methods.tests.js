import {
  Meteor
} from 'meteor/meteor';
import {
  assert
} from 'chai';
import {
  Placements
} from './placements.js';
import './methods.js';

if (Meteor.isServer) {
  describe('placements methods', function () {
    beforeEach(function () {
      Placements.remove({});
    });

    it('can add a new link', function () {
      const addLink = Meteor.server.method_handlers['placementsInsert'];

      addLink.apply({}, ['asfdSD9e93', new Date(), new Date(), true]);

      assert.equal(Placements.find().count(), 1);
    });
  });
}