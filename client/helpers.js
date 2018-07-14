import moment from 'moment';
import { Template } from 'meteor/templating';

Template.registerHelper('formattedDate', date => moment.utc(date).format('MMMM DD, YYYY'));

Template.registerHelper(
  'dateHTML',
  date => date && moment.utc(date).format('MM/DD/YYYY')
);

Template.registerHelper(
  'selected',
  (targetValue, optionValue) => (targetValue === optionValue ? 'selected' : '')
);
