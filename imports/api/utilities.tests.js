import { assert } from 'chai';
import { calculateDaysInPlacement } from './utilities';

/* eslint prefer-arrow-callback: "off" */

describe('utitlies', function() {
  it('calculates placement days correctly', function() {
    const endDate = null;
    const startDate = '2018-06-01T00:00:00.000Z';
    const isActive = true;
    const year = 2018;
    const month = 7;
    const currentYearMonth = '2018-7';
    const daysInPlacement = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth
    );

    assert.equal(daysInPlacement, 23);
  });
});
