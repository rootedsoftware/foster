import { assert } from 'chai';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import Contacts from '../contacts';
import './publications';

/* eslint prefer-arrow-callback: "off" */

describe('contacts publications', function() {
  beforeEach(function() {
    Contacts.remove({});
    Contacts.insert({
      familyId: 'edasi',
      name: 'Johnny Smith',
      title: 'Case Worker',
      phoneNumber: '(786) 111-1248',
    });
  });

  describe('contacts.all', function() {
    it('sends all contacts', function(done) {
      const collector = new PublicationCollector({ userId: 'edasi' });
      collector.collect('contacts.all', (collections) => {
        assert.equal(collections.contacts.length, 1);
        done();
      });
    });
  });
});
