import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Children } from '../../../api/children/children';
import {
  Placements,
  removePlacement
} from '../../../api/placements/placements';
import './Placements.html';
import '../../stylesheets/styles.css';

Template.Placements.onCreated(() => {
  Meteor.subscribe('placements.all');
  Meteor.subscribe('children.all');
});

Template.Placements.helpers({
  placements() {
    return Placements.find({});
  },
  children() {
    return Children.find({});
  },
  childName() {
    const child = Children.findOne({ _id: this.childId });
    return child && child.name;
  },
});

Template.Placements.events({
  'submit .placement-add': function(event) {
    event.preventDefault();

    const {
      startDate, endDate, isActive, childId,
    } = event.target;

    Meteor.call(
      'placementsInsert',
      new Date(startDate.value),
      endDate.value ? new Date(endDate.value) : null,
      isActive.value === 'yes',
      childId.value,
      (error) => {
        if (error) {
          alert(error.error);
        } else {
          startDate.value = '';
          endDate.value = '';
          isActive.value = '';
          childId.value = '';
        }
      }
    );
  },
  'click .removePlacement': function() {
    removePlacement(this._id);
  },
});
