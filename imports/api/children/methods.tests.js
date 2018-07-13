import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Children } from './children';
import './methods';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('children methods', function() {
    beforeEach(function() {
      Children.remove({});
    });

    it('can add a new link', function() {
      const addLink = Meteor.server.method_handlers.childrenInsert;

      addLink.apply({}, ['John', 11]);

      assert.equal(Children.find().count(), 1);
    });
  });
}
