const { checkPerformance } = require("../helper");



const sumUpToLoop = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

const sumUpToFormula = (n) => (n * (n + 1)) / 2;

let test = 100000000000000
console.log(checkPerformance(sumUpToLoop, test)) //?

console.log(checkPerformance(sumUpToFormula, test)) //?



