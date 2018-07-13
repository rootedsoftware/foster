import moment from 'moment';
import { Template } from 'meteor/templating';

Template.registerHelper('formattedDate', date => moment.utc(date).format('MM/DD/YYYY'));
