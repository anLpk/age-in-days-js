const ageInDays = (day, month, year) => {
  // TODO: Implement the method and return an integer
  const birthday = new Date(year, month - 1, day);
  return Math.round((Date.now() - birthday) / 86400000);
};

//January is month 0. December is month 11 that's why You should subtract 1 from your month:
// Age in days
//  ✓ should be 7645 days for someone born on January 1st, 2000
//  ✓ should be 29278 days for John Lennon
