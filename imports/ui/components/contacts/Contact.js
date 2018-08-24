import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Contacts from '../../../api/contacts/contacts';

import './Contact.html';
import { contactRemove } from '../../../api/contacts/methods';
import { showToast } from '../../../api/utilities';

Template.Contact.onCreated(() => {
  Meteor.subscribe('contact', FlowRouter.current().params.contactId);
});

Template.Contact.helpers({
  contact() {
    return Contacts.findOne();
  },
});

Template.Contact.events({
  'click .removeContact': function() {
    contactRemove({ contactId: this._id }, (error) => {
      showToast(error);
      if (!error) FlowRouter.go('/contacts');
    });
  },
  'click .editContact': function() {
    FlowRouter.go(`/contact/edit?id=${this._id}`);
  },
});
