import { Template } from 'meteor/templating';
import './EditContact.html';
import Contacts from '../../../api/contacts/contacts';
import { contactUpdate } from '../../../api/contacts/methods';
import { showToast } from '../../../api/utilities';

Template.EditContact.onCreated(function() {
  this.autorun(() => this.subscribe('contact', FlowRouter.current().params.contactId));
});

Template.EditContact.helpers({
  contact() {
    return Contacts.findOne();
  },
});

Template.EditContact.events({
  'submit form': function(event) {
    event.preventDefault();
    const {
      _id, name, title, phoneNumber,
    } = event.target;

    contactUpdate.call(
      {
        contactId: _id.value,
        name: name.value,
        title: title.value,
        phoneNumber: phoneNumber.value,
      },
      (error) => {
        showToast(error);
      }
    );
  },
});
