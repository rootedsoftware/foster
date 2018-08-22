import { Template } from 'meteor/templating';
import './header.html';

Template.Header.helpers({
  isActiveRoute(name) {
    return FlowRouter.getRouteName()
      && FlowRouter.getRouteName().toLowerCase() === name
      ? 'active'
      : '';
  },
});
