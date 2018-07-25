import { assert } from 'chai';
import { calculateDaysInPlacement } from './utilities';

/* eslint prefer-arrow-callback: "off" */

describe('utitlies', function() {
  it('should return correct days for active, same month or previous month placement', function() {
    const endDate = null;
    let startDate = '2018-07-01T00:00:00.000Z';
    const isActive = true;
    const year = 2018;
    const month = 7;
    const currentYearMonth = '2018-7';
    const todaysDate = 22;
    const daysInPlacementWithThisMonthStart = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth,
      todaysDate
    );

    startDate = '2018-06-01T00:00:00.000Z';

    const daysInPlacementWithPreviousMonthStart = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth,
      todaysDate
    );

    assert.equal(daysInPlacementWithThisMonthStart, 23);

    assert.equal(daysInPlacementWithPreviousMonthStart, 23);
  });

  it('should return correct days for active, previous month with mid-month placement', function() {
    const endDate = null;
    const startDate = '2018-06-15T00:00:00.000Z';
    const isActive = true;
    const year = 2018;
    const month = 6;
    const currentYearMonth = '2018-7';
    const todaysDate = 22;
    const daysInPlacement = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth,
      todaysDate
    );

    assert.equal(daysInPlacement, 16);
  });

  it('should return 0 days for active placement that started after reporting month ended', function() {
    const endDate = null;
    const startDate = '2018-06-15T00:00:00.000Z';
    const isActive = true;
    const year = 2018;
    const month = 3;
    const currentYearMonth = '2018-7';
    const todaysDate = 22;
    const daysInPlacement = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth,
      todaysDate
    );

    assert.equal(daysInPlacement, 0);
  });

  it('should return correct days for non-active, same month placement', function() {
    const endDate = '2018-07-15T00:00:00.000Z';
    const startDate = '2018-07-01T00:00:00.000Z';
    const isActive = false;
    const year = 2018;
    const month = 7;
    const currentYearMonth = '2018-7';
    const todaysDate = 22;
    const daysInPlacement = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth,
      todaysDate
    );

    assert.equal(daysInPlacement, 16);
  });

  it('should return correct days for non-active, previous month placement that ended in current month', function() {
    const endDate = '2018-07-15T00:00:00.000Z';
    const startDate = '2018-06-02T00:00:00.000Z';
    const isActive = false;
    const year = 2018;
    const month = 7;
    const currentYearMonth = '2018-7';
    const todaysDate = 22;
    const daysInPlacement = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth,
      todaysDate
    );

    assert.equal(daysInPlacement, 16);
  });

  it('should return 0 days for non-active, previous month ended placement', function() {
    const endDate = '2018-06-15T00:00:00.000Z';
    const startDate = '2018-06-01T00:00:00.000Z';
    const isActive = false;
    const year = 2018;
    const month = 7;
    const currentYearMonth = '2018-7';
    const todaysDate = 22;
    const daysInPlacement = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth,
      todaysDate
    );

    assert.equal(daysInPlacement, 0);
  });

  it('should return full month of days for non-active, but ended at end of reporting month', function() {
    const endDate = '2018-05-31T00:00:00.000Z';
    const startDate = '2018-05-01T00:00:00.000Z';
    const isActive = false;
    const year = 2018;
    const month = 5;
    const currentYearMonth = '2018-7';
    const todaysDate = 22;
    const daysInPlacement = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth,
      todaysDate
    );

    assert.equal(daysInPlacement, 31);
  });
});
