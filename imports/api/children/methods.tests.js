import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Children } from './children.js';
import './methods.js';

if (Meteor.isServer) {
  describe('children methods', function () {
    beforeEach(function () {
      Children.remove({});
    });

    it('can add a new link', function () {
      const addLink = Meteor.server.method_handlers['children.insert'];

      addLink.apply({}, ['John', 11]);

      assert.equal(Children.find().count(), 1);
    });
  });
}
