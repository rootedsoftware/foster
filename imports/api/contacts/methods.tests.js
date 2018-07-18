import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import { Contacts } from './contacts';
import './methods';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('contacts methods', function() {
    beforeEach(function() {
      Contacts.remove({});
    });

    it('can add a new link', function() {
      const addLink = Meteor.server.method_handlers.contactsInsert;

      addLink.apply({}, ['John', 11]);

      assert.equal(Contacts.find().count(), 1);
    });
  });
}
