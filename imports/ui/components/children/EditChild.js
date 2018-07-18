import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './EditChild.html';
import toastr from 'toastr';
import { Children } from '../../../api/children/children';

Template.EditChild.onCreated(() => {
  Meteor.subscribe('child', FlowRouter.current().params.childId);
});

Template.EditChild.helpers({
  child() {
    return Children.findOne();
  },
});

Template.EditChild.events({
  'submit form': function(event) {
    event.preventDefault();
    const { _id, age, name } = event.target;
    Meteor.call('childUpdate', _id.value, Number(age.value), name.value, (error) => {
      if (error) {
        toastr.error(error.error);
      } else {
        toastr.success('Updated');
      }
    });
  },
});
