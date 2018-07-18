import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Contacts, removeContact } from '../../../api/contacts/contacts';
import './Contact.html';

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
    removeContact(this._id);
    FlowRouter.go('/contacts');
  },
  'click .editContact': function() {
    FlowRouter.go(`/contact/edit?id=${this._id}`);
  },
});
