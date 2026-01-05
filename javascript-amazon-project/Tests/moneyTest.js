// Automated tests!!

import {formatCurrency} from '../scripts/utils/money.js';

console.log('Test suite:formatCurrency');

console.log('converts cents into dollars');
if (formatCurrency(2095)) { //basic test case
  console.log('passed');
} else {
  console.log('failed');
}

 console.log('works with zero');
if (formatCurrency(0) === '0.00') { //edge test case
  console.log('passed');
} else {
  console.log('failed');
}

console.log('rounds up to the nearest cent');
if (formatCurrency(2000.5) ==='20.01') { //decimal (edge) test case
  console.log('passed');
} else {
  console.log('failed');
}

console.log('rounds up to the nearest cent');
if (formatCurrency(2000.4) === '20.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('handles negative values');
if (formatCurrency(-500) === '-5.00') { //negative value test case
  console.log('passed');
} else {
  console.log('failed');
}