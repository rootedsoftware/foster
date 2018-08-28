/* eslint-disable meteor/template-names */
/* eslint-disable meteor/no-template-lifecycle-assignments */

// Simply 'inherites' rendered callback from AccountsTemplates
Template.atReCaptcha.rendered = AccountsTemplates.atReCaptchaRendered;

// Simply 'inherites' helpers from AccountsTemplates
Template.atReCaptcha.helpers(AccountsTemplates.atReCaptchaHelpers);
