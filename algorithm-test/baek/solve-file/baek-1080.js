const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let input = fs.readFileSync(filepath).toString().trim().split('\n');

// 문제 입력 조건들 정리
const [row, col] = input.shift().split(' ').map(Number);
const [A, B] = [[], []];
const tmp = [A, B];
for (let i = 0; i < 2; i += 1) {
  for (let j = 0; j < row; j += 1) {
    tmp[i].push(input.shift().split('').map(Number));
  }
}

let ans = 0;
const solve = () => {
  for (let i = 0; i < row - 2; i += 1) {
    for (let j = 0; j < col - 2; j += 1) {
      if (A[i][j] !== B[i][j]) change([i, j]);
    }
  }

  return A.toString() === B.toString() ? true : false;
};

// 3x3 으로 변환시킬 함수
const change = (start) => {
  const [x, y] = start;
  if (x + 2 >= row || y + 2 >= col) return;
  for (let i = x; i < x + 3; i += 1) {
    for (let j = y; j < y + 3; j += 1) {
      if (A[i][j]) A[i][j] = 0;
      else A[i][j] = 1;
    }
  }
  ans += 1;
};

if (solve()) console.log(ans);
else console.log(-1);
