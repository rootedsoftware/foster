import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Placements } from './placements';
import './methods';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('placements methods', function() {
    beforeEach(() => {
      Placements.remove({});
    });

    it('can add a new link', function() {
      const addLink = Meteor.server.method_handlers.placementsInsert;
      addLink.apply({}, [
        new Date(),
        new Date(),
        true,
        '343asdfaisII',
        'isIas23akIsd',
      ]);

      assert.equal(Placements.find().count(), 1);
    });
  });
}
