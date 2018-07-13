import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './EditPlacement.html';
import { Placements } from '../../../api/placements/placements';

Template.EditPlacement.onCreated(() => {
  Meteor.subscribe('placement', FlowRouter.current().params.placementId);
});

Template.EditPlacement.helpers({
  placement() {
    return Placements.findOne();
  },
});

Template.EditPlacement.events({
  'submit form': function(event) {
    event.preventDefault();
    const {
      _id, startDate, endDate, isActive, childId,
    } = event.target;
    Meteor.call(
      'placementUpdate',
      _id.value,
      startDate.value,
      endDate.value,
      isActive.value,
      childId.value,
      (error) => {
        if (error) {
          alert(error.error);
        } else {
          alert('Updated');
        }
      }
    );
  },
});
