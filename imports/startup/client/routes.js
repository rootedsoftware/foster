import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import needed templates
import '../../ui/layouts/full/full';
import '../../ui/layouts/body/body';
import '../../ui/layouts/LoginLayout/LoginLayout';
import '../../ui/pages/MyAccountTemplates/MyAccountTemplates';

import '../../ui/components/header/header';
import '../../ui/components/footer/footer';
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

FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn], {
  except: ['NotFound'],
});

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'Home',
      bottom: 'Footer',
    });
  },
});

FlowRouter.route('/rates', {
  name: 'Rates',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'Rates',
      bottom: 'Footer',
    });
  },
});
FlowRouter.route('/rate/:rateId', {
  name: 'Rate',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'Rate',
      bottom: 'Footer',
    });
  },
});
FlowRouter.route('/rate/edit/:rateId', {
  name: 'EditRate',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'EditRate',
      bottom: 'Footer',
    });
  },
});
FlowRouter.route('/children', {
  name: 'Children',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'Children',
      bottom: 'Footer',
    });
  },
});
FlowRouter.route('/child/:childId', {
  name: 'Child',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'Child',
      bottom: 'Footer',
    });
  },
});
FlowRouter.route('/child/edit/:childId', {
  name: 'EditChild',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'EditChild',
      bottom: 'Footer',
    });
  },
});

FlowRouter.route('/placements', {
  name: 'Placements',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'Placements',
      bottom: 'Footer',
    });
  },
});
FlowRouter.route('/placement/:placementId', {
  name: 'Placement',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'Placement',
      bottom: 'Footer',
    });
  },
});
FlowRouter.route('/placement/edit/:placementId', {
  name: 'EditPlacement',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'EditPlacement',
      bottom: 'Footer',
    });
  },
});

FlowRouter.route('/contacts', {
  name: 'Contacts',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'Contacts',
      bottom: 'Footer',
    });
  },
});
FlowRouter.route('/contact/:contactId', {
  name: 'Contact',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'Contact',
      bottom: 'Footer',
    });
  },
});
FlowRouter.route('/contact/edit/:contactId', {
  name: 'EditContact',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'EditContact',
      bottom: 'Footer',
    });
  },
});

FlowRouter.route('/reports', {
  name: 'Reports',
  action() {
    BlazeLayout.render('Full', {
      top: 'Header',
      main: 'Reports',
      bottom: 'Footer',
    });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('Body', { main: 'NotFound' });
  },
};

AccountsTemplates.configureRoute('changePwd', {
  template: 'MyAccountTemplates',
});
AccountsTemplates.configureRoute('forgotPwd', {
  template: 'MyAccountTemplates',
});
AccountsTemplates.configureRoute('resetPwd', {
  template: 'MyAccountTemplates',
});
AccountsTemplates.configureRoute('signIn', {
  template: 'MyAccountTemplates',
});
AccountsTemplates.configureRoute('signUp', {
  template: 'MyAccountTemplates',
});
AccountsTemplates.configureRoute('verifyEmail', {
  template: 'MyAccountTemplates',
});
