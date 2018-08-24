import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Contacts, removeContact } from '../../../api/contacts/contacts';
import './Contacts.html';
import { showToast } from '../../../api/utilities';

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

    Meteor.call(
      'contactsInsert',
      name.value,
      title.value,
      phoneNumber.value,
      (error) => {
        showToast(error);
        if (!error) {
          name.value = '';
          title.value = '';
          phoneNumber.value = '';
        }
      }
    );
  },
  'click .removeContact': function() {
    removeContact(this._id);
  },
});
