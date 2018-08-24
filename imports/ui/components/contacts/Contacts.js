import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Contacts from '../../../api/contacts/contacts';
import { contactInsert, contactRemove } from '../../../api/contacts/methods';
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

    contactInsert.call(
      {
        name: name.value,
        title: title.value,
        phoneNumber: phoneNumber.value,
      },
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
    contactRemove.call({ contactId: this._id }, error => showToast(error));
  },
});
