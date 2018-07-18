import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contacts } from './contacts';

Meteor.methods({
  contactsInsert(name, title, phoneNumber) {
    check(name, String);
    check(title, String);
    check(phoneNumber, String);

    return Contacts.insert({
      name,
      title,
      phoneNumber,
    });
  },
  contactsRemove(_id) {
    check(_id, String);
    return Contacts.remove({
      _id,
    });
  },
  contactUpdate(_id, name, title, phoneNumber) {
    check(_id, String);
    check(name, String);
    check(title, String);
    check(phoneNumber, String);
    return Contacts.update({ _id }, { $set: { name, title, phoneNumber } });
  },
});
