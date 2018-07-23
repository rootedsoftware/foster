import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './Reports.html';
import { Placements } from '../../../api/placements/placements';
import { Children } from '../../../api/children/children';
import { Rates } from '../../../api/rates/rates';
import { calculateDaysInPlacement } from '../../../api/utilities';

Template.Reports.onCreated(function() {
  this.autorun(() => {
    this.month = new ReactiveVar(new Date().getMonth() + 1);
    this.year = new ReactiveVar(new Date().getFullYear());
    this.currentYearMonth = new ReactiveVar(
      `${String(new Date().getFullYear())}-${String(new Date().getMonth() + 1)}`
    );
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

Template.Reports.helpers({
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

    const daysInPlacement = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth
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

    const daysInPlacement = calculateDaysInPlacement(
      endDate,
      startDate,
      isActive,
      year,
      month,
      currentYearMonth
    );

    return rate && rate.dailyAmount && rate.dailyAmount * daysInPlacement;
  },
});
