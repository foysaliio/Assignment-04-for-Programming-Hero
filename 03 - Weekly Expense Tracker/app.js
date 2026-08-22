"use strict";
const calculateWeeklyTotal = (expenses) => {
    const total = expenses.reduce((accum, number) => {
        return accum + number;
    }, 0);
    return total;
};
console.log(calculateWeeklyTotal([200, 450, 100]));
console.log(calculateWeeklyTotal([1000, 250]));
console.log(calculateWeeklyTotal([]));
