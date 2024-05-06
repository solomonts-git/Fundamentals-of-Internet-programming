const d = new Date();

// The setFullYear() method sets the year of a date object. In this example to 2020:
console.log("set Year", d.setFullYear(2023));

// The setFullYear() method can optionally set month and day:
console.log("Year", d.setFullYear(2020, 11, 3));

// The setMonth() method sets the month of a date object (0-11):
console.log("Month", d.setMonth(11));

// The setDate() method sets the day of a date object (1-31):
console.log("Date", d.setDate(20));
