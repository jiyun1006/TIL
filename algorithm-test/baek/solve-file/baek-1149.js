const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let [N, ...input] = fs.readFileSync(filepath).toString().trim().split('\n');

N = +N;
input = input.map((el) => el.split(' ').map(Number));

for (let i = 1; i < N; i += 1) {
  input[i][0] += Math.min(input[i - 1][1], input[i - 1][2]);
  input[i][1] += Math.min(input[i - 1][0], input[i - 1][2]);
  input[i][2] += Math.min(input[i - 1][0], input[i - 1][1]);
}

console.log(Math.min(...input[input.length - 1]));
