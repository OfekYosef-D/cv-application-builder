export const formatMonthYear = (dateString) => {
  if (!dateString) return '';
  
  const [year, month] = dateString.split('-');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const monthIndex = parseInt(month) - 1;
  const monthName = monthNames[monthIndex];
  
  return monthName ? `${monthName} ${year}` : dateString;
};

export const formatDateRange = (startDate, endDate, fallbackStart = '', fallbackEnd = '') => {
  const formattedStart = startDate ? formatMonthYear(startDate) : fallbackStart;
  
  // If start date exists but end date is empty, show "Present"
  if (startDate && !endDate) {
    return `${formattedStart} - Present`;
  }
  
  // If both dates exist, format both
  if (startDate && endDate) {
    const formattedEnd = formatMonthYear(endDate);
    return `${formattedStart} - ${formattedEnd}`;
  }
  
  // If only end date exists (unusual case)
  if (!startDate && endDate) {
    const formattedEnd = formatMonthYear(endDate);
    return formattedEnd;
  }
  
  // If neither exists, use fallbacks
  if (fallbackStart && fallbackEnd) {
    return `${fallbackStart} - ${fallbackEnd}`;
  }
  
  return '';
};
