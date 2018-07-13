import { Meteor } from 'meteor/meteor';
import { Children } from '../children';

Meteor.publish('children.all', () => Children.find());

Meteor.publish('child', _id => Children.find({ _id }));
