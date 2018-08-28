import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
  defaultLayout: 'LoginLayout',
  defaultLayoutRegions: {
    nav: 'nav',
    footer: 'main',
  },
  defaultContentRegion: 'main',
  showForgotPasswordLink: true,
  onLogoutHook() {
    FlowRouter.go('/sign-in');
  },
  overrideLoginErrors: true,
  enablePasswordChange: true,

  // sendVerificationEmail: true,
  // enforceEmailVerification: true,
  // confirmPassword: true,
  // continuousValidation: false,
  // displayFormLabels: true,
  // forbidClientAccountCreation: true,
  // formValidationFeedback: true,
  // homeRoutePath: '/',
  // showAddRemoveServices: false,
  // showPlaceholders: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true,

  // Privacy Policy and Terms of Use
  // privacyUrl: 'privacy',
  // termsUrl: 'terms-of-use',
});
