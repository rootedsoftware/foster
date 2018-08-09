import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Respites } from './respites';
import './methods';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('respites methods', function() {
    beforeEach(() => {
      Respites.remove({});
    });

    it('can add a new placement', function() {
      const addLink = Meteor.server.method_handlers.respitesInsert;
      addLink.apply({}, [
        new Date(),
        new Date(),
        true,
        '343asdfaisII',
        'isIas23akIsd',
      ]);

      assert.equal(Respites.find().count(), 1);
    });
  });
}
