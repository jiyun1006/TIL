const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let input = fs.readFileSync(filepath).toString().trim().split('\n');

let [leftStack, rightStack] = [input.shift().split(''), []];
const len = Number(input.shift());
const commands = input.map((el) => el.split(' '));
for (let i = 0; i < len; i += 1) {
  switch (commands[i][0]) {
    case 'L':
      if (leftStack.length) rightStack.push(leftStack.pop());
      break;
    case 'D':
      if (rightStack.length) leftStack.push(rightStack.pop());
      break;
    case 'B':
      if (leftStack.length) leftStack.pop();
      break;
    case 'P':
      leftStack.push(commands[i][1]);
      break;
  }
}

console.log(leftStack.join('') + rightStack.reverse().join(''));
