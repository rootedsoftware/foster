import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { childInsert, childRemove } from '../../../api/children/methods';
import Children from '../../../api/children/children';
import './AddChild';
import './Children.html';
import { showToast } from '../../../api/utilities';

Template.Children.onCreated(function() {
  this.autorun(() => Meteor.subscribe('children.all'));
});

Template.Children.helpers({
  children() {
    return Children.find({});
  },
});

Template.Children.events({
  'submit .child-add': function(event) {
    event.preventDefault();

    const { age, name } = event.target;

    childInsert.call(
      {
        age: Number(age.value),
        name: name.value,
      },
      (error) => {
        showToast(error);
        if (!error) {
          age.value = '';
          name.value = '';
        }
      }
    );
  },
  'click .removeChild': function() {
    childRemove.call(
      {
        childId: this._id,
      },
      (error) => {
        showToast(error);
      }
    );
  },
});
