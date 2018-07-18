import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import toastr from 'toastr';
import { Contacts, removeContact } from '../../../api/contacts/contacts';
import './Contacts.html';

Template.Contacts.onCreated(() => {
  Meteor.subscribe('contacts.all');
});

Template.Contacts.helpers({
  contacts() {
    return Contacts.find({});
  },
});

Template.Contacts.events({
  'submit .contact-add': function(event) {
    event.preventDefault();

    const { name, title, phoneNumber } = event.target;
    console.log({ name: name.value, title: title.value, phoneNumber: phoneNumber.value })

    Meteor.call('contactsInsert', name.value, title.value, phoneNumber.value, (error) => {
      if (error) {
        console.log(error)
        toastr.error(error.error);
      } else {
        name.value = '';
        title.value = '';
        phoneNumber.value = '';
      }
    });
  },
  'click .removeContact': function() {
    removeContact(this._id);
  },
});
