import moment from 'moment';

/* eslint import/prefer-default-export: "off" */
export const calculateDaysInPlacement = (
  endDate,
  startDate,
  isActive,
  year,
  month,
  currentYearMonth,
  todaysDate
) => {
  const startOfMonth = `${String(year)}-${String(month)}`;
  const endOfMonth = `${String(year)}-${String(month)}-${new Date(
    year,
    month,
    0
  ).getDate()}`;

  const startDateObject = new Date(startDate);
  const endDateObject = endDate === null ? null : new Date(endDate);

  if (currentYearMonth === startOfMonth) {
    if (isActive) {
      if (new Date(startOfMonth) < startDateObject) {
        console.log(todaysDate, startDateObject.getDate());
        return todaysDate - startDateObject.getDate();
      }
      // This should be the number of days from the first day of the month to today (including today)
      return todaysDate + 1;
    }
    if (new Date(startOfMonth) < startDateObject) {
      return endDateObject.getDate() - startDateObject.getDate() + 1;
    }
    if (endDateObject < new Date(startOfMonth)) {
      return 0;
    }
    // + 2 because the end date will be set to the 1st second of the day, and that means that it won't be counted
    return endDateObject.getDate() + 2;
  }
  if (new Date(startOfMonth) < startDateObject) {
    if (new Date(endOfMonth) < startDateObject) {
      return 0;
    }
    return new Date(endOfMonth).getDate() - startDateObject.getDate();
  }
  return new Date(endOfMonth).getDate();
};
