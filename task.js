const readline = require('readline-sync');

const x1 = readline.questionInt('x1: ');
const y1 = readline.questionInt('y1: ');
const x2 = readline.questionInt('x2: ');
const y2 = readline.questionInt('y2: ');

console.log('x:', (x1 + x2) / 2, 'y:',  (y1 + y2) / 2);