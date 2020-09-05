const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Get month name
 * @param month - month number (0-11)
 */
export const getMonthName = (month: number) => monthNames[month];
