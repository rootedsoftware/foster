import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body';
import '../../ui/pages/home/home';

import '../../ui/pages/not-found/not-found';

import '../../ui/components/rates/rates';
import '../../ui/components/rate/rate';
import '../../ui/components/rate/EditRate';

import '../../ui/components/children/Children';
import '../../ui/components/children/child';
import '../../ui/components/children/EditChild';

import '../../ui/components/placements/Placements';
import '../../ui/components/placements/Placement';
import '../../ui/components/placements/EditPlacement';

import '../../ui/components/contacts/Contacts';
import '../../ui/components/contacts/Contact';
import '../../ui/components/contacts/EditContact';

import '../../ui/pages/reports/Reports';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('AppBody', { main: 'Home' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('AppBody', { main: 'App_notFound' });
  },
};

FlowRouter.route('/rates', {
  name: 'Rates',
  action() {
    BlazeLayout.render('AppBody', { main: 'Rates' });
  },
});
FlowRouter.route('/rate/:rateId', {
  name: 'Rate',
  action() {
    BlazeLayout.render('AppBody', { main: 'Rate' });
  },
});
FlowRouter.route('/rate/edit/:rateId', {
  name: 'EditRate',
  action() {
    BlazeLayout.render('AppBody', { main: 'EditRate' });
  },
});
FlowRouter.route('/children', {
  name: 'Children',
  action() {
    BlazeLayout.render('AppBody', { main: 'Children' });
  },
});
FlowRouter.route('/child/:childId', {
  name: 'Child',
  action() {
    BlazeLayout.render('AppBody', { main: 'Child' });
  },
});
FlowRouter.route('/child/edit/:childId', {
  name: 'EditChild',
  action() {
    BlazeLayout.render('AppBody', { main: 'EditChild' });
  },
});

FlowRouter.route('/placements', {
  name: 'Placements',
  action() {
    BlazeLayout.render('AppBody', { main: 'Placements' });
  },
});
FlowRouter.route('/placement/:placementId', {
  name: 'Placement',
  action() {
    BlazeLayout.render('AppBody', { main: 'Placement' });
  },
});
FlowRouter.route('/placement/edit/:placementId', {
  name: 'EditPlacement',
  action() {
    BlazeLayout.render('AppBody', { main: 'EditPlacement' });
  },
});

FlowRouter.route('/contacts', {
  name: 'Contacts',
  action() {
    BlazeLayout.render('AppBody', { main: 'Contacts' });
  },
});
FlowRouter.route('/contact/:contactId', {
  name: 'Contact',
  action() {
    BlazeLayout.render('AppBody', { main: 'Contact' });
  },
});
FlowRouter.route('/contact/edit/:contactId', {
  name: 'EditContact',
  action() {
    BlazeLayout.render('AppBody', { main: 'EditContact' });
  },
});

FlowRouter.route('/reports', {
  name: 'Reports',
  action() {
    BlazeLayout.render('AppBody', { main: 'Reports' });
  },
});
