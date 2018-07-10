import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/components/rates/rates.js';
import '../../ui/components/rate/rate.js';
import '../../ui/components/rate/EditRate.js';
import '../../ui/components/children/Children.js';
import '../../ui/components/children/child.js';
import '../../ui/components/children/EditChild.js';
import '../../ui/pages/not-found/not-found.js';

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
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('AppBody', { main: 'App_notFound' });
  },
};
