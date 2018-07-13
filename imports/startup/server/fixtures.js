// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Rates } from '../../api/rates/rates.js';

Meteor.startup(() => {
  // if the Rates collection is empty
  if (Rates.find().count() === 0) {
    const data = [  
      {
        name: 'Respit',
        dailyAmount: 15,
      },
      {
        name: 'Regular',
        dailyAmount: 30,
      },
      {
        name: 'Family',
        dailyAmount: 20,
      },
    ];

    data.forEach(link => Rates.insert(link));
  }
});
