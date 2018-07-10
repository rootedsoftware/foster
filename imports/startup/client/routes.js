import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/components/rates/rates.js';
import '../../ui/components/rate/rate.js';
import '../../ui/components/rate/EditRate.js';
import '../../ui/pages/not-found/not-found.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('AppBody', { main: 'Home' });
  },
});
FlowRouter.route('/rates', {
  name: 'App.home',
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
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('AppBody', { main: 'App_notFound' });
  },
};
