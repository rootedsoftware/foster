import './EditChild.html';
import { Children } from '../../../api/children/children';

Template.EditChild.onCreated(function() {
  Meteor.subscribe('child', FlowRouter.current().params.childId);
});

Template.EditChild.helpers({
  rate: function() {
    return Children.findOne();
  }
});

Template.EditChild.events({
  'submit form'(event) {
    event.preventDefault()
    const { _id, age, name } = event.target;
    Meteor.call('child.update', _id.value, age.value, name.value, function(error) {
      if (error) {
        alert(error.error);
      } else {
        alert('Updated');
      }
    });
  }
})