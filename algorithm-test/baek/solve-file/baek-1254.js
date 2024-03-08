const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let input = fs.readFileSync(filepath).toString().trim().split('\n');
input = input.shift();

const solve = () => {
  const reverseInput = input.split('').reverse().join('');
  let len = input.length;
  for (let i = 0; i < len; i += 1) {
    let BOOLEAN = true;
    for (let j = 0; j < len - i; j += 1) {
      if (input[i + j] !== reverseInput[j]) {
        BOOLEAN = !BOOLEAN;
        break;
      }
    }
    if (BOOLEAN) {
      len += i;
      break;
    }
  }
  console.log(len);
};

solve();
