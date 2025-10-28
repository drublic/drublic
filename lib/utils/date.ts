export const getDate = (date: string) => {
  // Handle empty or null dates
  if (!date || typeof date !== 'string') {
    return new Date();
  }

  const splitted = date.split(".");
  
  // Check if we have exactly 3 parts (day, month, year)
  if (splitted.length !== 3) {
    // Try to parse as ISO date or other common formats
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
    // Fallback to current date if parsing fails
    return new Date();
  }

  // Validate that all parts are numbers
  const day = parseInt(splitted[0], 10);
  const month = parseInt(splitted[1], 10);
  const year = parseInt(splitted[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    // Try to parse as ISO date or other common formats
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
    // Fallback to current date if parsing fails
    return new Date();
  }

  // Create date with month-1 because JavaScript months are 0-indexed
  const parsedDate = new Date(year, month - 1, day);
  
  // Check if the resulting date is valid
  if (isNaN(parsedDate.getTime())) {
    // Fallback to current date if the date is invalid
    return new Date();
  }

  return parsedDate;
};
