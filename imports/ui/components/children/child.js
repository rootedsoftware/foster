import { Template } from 'meteor/templating';
import Children from '../../../api/children/children';
import './child.html';
import { childRemove } from '../../../api/children/methods';
import { showToast } from '../../../api/utilities';

Template.Child.onCreated(function() {
  this.autorun(() => this.subscribe('child', FlowRouter.current().params.childId));
});

Template.Child.helpers({
  child() {
    return Children.findOne();
  },
});

Template.Child.events({
  'click .removeChild': function() {
    childRemove.call(
      {
        childId: this._id,
      },
      (error) => {
        showToast(error);
        if (!error) {
          FlowRouter.go('/children');
        }
      }
    );
  },
  'click .editChild': function() {
    FlowRouter.go(`/child/edit?id=${this._id}`);
  },
});
