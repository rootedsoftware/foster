/* eslint import/prefer-default-export: "off" */
export const calculateDaysInPlacement = (
  endDate,
  startDate,
  isActive,
  year,
  month,
  currentYearMonth
) => {
  const startOfMonth = `${String(year)}-${String(month)}`;

  if (currentYearMonth === startOfMonth) {
    if (isActive) {
      if (new Date(startOfMonth) < startDate) {
        return new Date().getDate() - startDate.getDate();
      }
      // This should be the number of days from the first day of the month to today (including today)
      return new Date().getDate() + 1;
    }
    if (new Date(startOfMonth) < startDate) {
      return endDate.getDate() - startDate.getDate() + 1;
    }
    return endDate.getDate() - 1;
  }
};
