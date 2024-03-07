const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let input = fs.readFileSync(filepath).toString().trim().split('\n');

const [num, S] = input.shift().split(' ').map(Number);

const numArr = input.shift().split(' ').map(Number);

let answer = 0;

const recursion = (idx = 0, sum = 0) => {
  if (idx === num) return; // 인덱스가 배열의 길이와 같아지면, 그만둔다.

  sum += numArr[idx];
  if (sum === S) answer += 1;

  recursion(idx + 1, sum);
  recursion(idx + 1, sum - numArr[idx]);
};
recursion();

console.log(answer);
