import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body';
import '../../ui/pages/home/home';

import '../../ui/components/rates/rates';
import '../../ui/components/rate/rate';
import '../../ui/components/rate/EditRate';

import '../../ui/components/children/Children';
import '../../ui/components/children/child';
import '../../ui/components/children/EditChild';

import '../../ui/components/placements/Placements';
import '../../ui/components/placements/Placement';
import '../../ui/components/placements/EditPlacement';

import '../../ui/pages/not-found/not-found';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('AppBody', { main: 'Home' });
  },
});
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

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('AppBody', { main: 'App_notFound' });
  },
};
