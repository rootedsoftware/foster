import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Contacts } from './contacts';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('contacts collection', function() {
    it('insert correctly', function() {
      const contactId = Contacts.insert({
        name: 'Johnny Smith',
        title: 'Case Worker',
        phoneNumber: '(786) 111-1248',
      });
      const added = Contacts.find({ _id: contactId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'contacts');
      assert.equal(count, 1);
    });
  });
}
