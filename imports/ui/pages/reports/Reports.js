import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './Reports.html';
import { Placements } from '../../../api/placements/placements';
import { Children } from '../../../api/children/children';
import { Rates } from '../../../api/rates/rates';
import { calculateDaysInPlacement } from '../../../api/utilities';

Template.Reports.onCreated(function() {
  Reimbursements = new Mongo.Collection(null);

  this.month = new ReactiveVar(new Date().getMonth() + 1);
  this.year = new ReactiveVar(new Date().getFullYear());
  this.currentYearMonth = new ReactiveVar(
    `${String(new Date().getFullYear())}-${String(new Date().getMonth() + 1)}`
  );

  this.autorun(() => {
    this.subscribe(
      'placementByMonth',
      this.month.get(),
      this.year.get(),
      this.currentYearMonth.get()
    );
    this.subscribe('children.all');
    this.subscribe('rates.all');
  });
});

Template.Reports.onRendered(() => {
  document.getElementById('month-selector').value = new Date().getMonth();
});

Template.Reports.events({
  'change #month-selector, change #year-selector': function(
    event,
    templateInstance
  ) {
    const selectedMonth = document.getElementById('month-selector').value;
    const selectedYear = document.getElementById('year-selector').value;
    templateInstance.month.set(Number(selectedMonth) + 1);
    templateInstance.year.set(Number(selectedYear));
  },
});
Template.Reports.helpers({
  total() {
    let total = 0;
    Reimbursements.find().forEach((reimbursement) => {
      total += reimbursement.total;
    });
    return total;
  },
  placements() {
    return Placements.find();
  },
  childName() {
    const child = Children.findOne({ _id: this.childId });
    return child && child.name;
  },
  numberOfDaysPlacedThisMonth() {
    const { endDate, startDate, isActive } = this;
    const templateInstance = Template.instance();
    const year = templateInstance.year.get();
    const month = templateInstance.month.get();
    const currentYearMonth = templateInstance.currentYearMonth.get();
    const todaysDate = new Date().getDate();
    const daysInPlacement = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth,
      todaysDate
    );

    return daysInPlacement;
  },
  rate() {
    const rate = Rates.findOne({ _id: this.rateId });
    return rate && rate.dailyAmount;
  },
  totalReimbursement() {
    const rate = Rates.findOne({ _id: this.rateId });
    const { endDate, startDate, isActive } = this;
    const templateInstance = Template.instance();
    const year = templateInstance.year.get();
    const month = templateInstance.month.get();
    const currentYearMonth = templateInstance.currentYearMonth.get();
    const todaysDate = new Date().getDate();
    const daysInPlacement = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth,
      todaysDate
    );

    const total = rate && rate.dailyAmount && rate.dailyAmount * daysInPlacement;
    Reimbursements.upsert(
      { _id: this._id },
      {
        $set: { total },
      }
    );

    return total;
  },
  months() {
    return [
      { monthNumber: 0, monthName: 'Jan' },
      { monthNumber: 1, monthName: 'Feb' },
      { monthNumber: 2, monthName: 'Mar' },
      { monthNumber: 3, monthName: 'Apr' },
      { monthNumber: 4, monthName: 'May' },
      { monthNumber: 5, monthName: 'Jun' },
      { monthNumber: 6, monthName: 'Jul' },
      { monthNumber: 7, monthName: 'Aug' },
      { monthNumber: 8, monthName: 'Sep' },
      { monthNumber: 9, monthName: 'Oct' },
      { monthNumber: 10, monthName: 'Nov' },
      { monthNumber: 11, monthName: 'Dec' },
    ];
  },
  years() {
    const currentYear = new Date().getFullYear();
    const last5Years = [
      currentYear,
      currentYear - 1,
      currentYear - 2,
      currentYear - 3,
      currentYear - 4,
    ];
    return last5Years;
  },
});
