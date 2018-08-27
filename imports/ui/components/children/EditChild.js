import { Template } from 'meteor/templating';
import './EditChild.html';
import Children from '../../../api/children/children';
import { childUpdate } from '../../../api/children/methods';
import { showToast } from '../../../api/utilities';

Template.EditChild.onCreated(function() {
  this.autorun(() => this.subscribe('child', FlowRouter.current().params.childId));
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

    childUpdate.call(
      {
        childId: _id.value,
        age: Number(age.value),
        name: name.value,
      },
      (error) => {
        showToast(error);
      }
    );
  },
});
