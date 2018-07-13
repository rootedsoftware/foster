import { Meteor } from 'meteor/meteor';
import { Rates } from '../rates';

Meteor.publish('rates.all', () => Rates.find());

Meteor.publish('rate', _id => Rates.find({ _id }));
