import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './EditContact.html';
import { Contacts } from '../../../api/contacts/contacts';
import { showToast } from '../../../api/utilities';

Template.EditContact.onCreated(() => {
  Meteor.subscribe('contact', FlowRouter.current().params.contactId);
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

    Meteor.call(
      'contactUpdate',
      _id.value,
      name.value,
      title.value,
      phoneNumber.value,
      (error) => {
        showToast(error);
      }
    );
  },
});
