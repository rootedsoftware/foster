import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';
import Contacts from './contacts';
import { contactInsert, contactUpdate, contactRemove } from './methods';

/* eslint prefer-arrow-callback: "off" */

if (Meteor.isServer) {
  describe('contacts methods', function() {
    beforeEach(function() {
      Contacts.remove({});
    });

    it('can add a new contact', function() {
      contactInsert.run.call(
        { userId: 'abcd' },
        {
          name: 'Johnny 5',
          title: 'Case Worker',
          phoneNumber: '828-323-0273',
        }
      );

      assert.equal(Contacts.find().count(), 1);
    });

    it('can update a contact', function() {
      contactInsert.run.call(
        { userId: 'edfasi9' },
        {
          name: 'Jamie',
          title: 'Case Worker',
          phoneNumber: '828-323-0273',
        }
      );
      const contactId = Contacts.findOne();

      contactUpdate.run.call(
        { userId: 'edfasi9' },
        {
          contactId: contactId._id,
          name: 'Jamie Robot',
          title: 'Supervisor',
        }
      );

      assert.equal(
        Contacts.findOne({ familyId: 'edfasi9' }).name,
        'Jamie Robot'
      );
      assert.equal(
        Contacts.findOne({ familyId: 'edfasi9' }).title,
        'Supervisor'
      );
    });

    it('can remove a contact with matching familyId and userId', function() {
      contactInsert.run.call(
        { userId: 'efgh' },
        {
          name: 'Jerry',
          title: 'Boss',
        }
      );
      const contact = Contacts.findOne();
      assert.equal(Contacts.findOne().name, 'Jerry');

      contactRemove.run.call(
        { userId: 'efgh' },
        {
          contactId: contact._id,
        }
      );

      assert.equal(Contacts.findOne(), undefined);
    });
  });
}
