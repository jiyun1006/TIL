const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let input = fs.readFileSync(filepath).toString().trim().split('\n');

const [N, sLen] = input.shift().split(' ').map(Number);

const sArr = sLen ? input.shift().split(' ').map(Number) : [];
const ansArr = [];

const solve = () => {
  // recursion();
  // let calculNum = Number.MAX_SAFE_INTEGER;
  // ansArr.forEach((sum) => {
  //   calculNum = Math.min(Math.abs(N - sum), calculNum);
  // });
  // console.log(calculNum);
  const tmpArr = Array.from({ length: 1002 }, () => 0);
  if (sLen) {
    for (let el of sArr) {
      tmpArr[el] = 1;
    }
  } else {
    console.log(0);
    return;
  }

  let sum = 0;
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= 1000; i += 1) {
    if (tmpArr[i]) continue;
    for (let j = 1; j <= 1000; j += 1) {
      if (tmpArr[j]) continue;
      for (let k = 1; k <= 1000; k += 1) {
        if (tmpArr[k]) continue;
        sum = i * j * k;
        ans = Math.min(Math.abs(N - sum), ans);
      }
    }
  }
  console.log(ans);
};

const recursion = function choiceNum(cnt = 0, num = 1, sum = 1) {
  // if (!numArr.length && maxNum < num) return;
  let tmpSum = sum;
  if (cnt === 3) {
    ansArr.push(tmpSum);
    return;
  }
  while (sArr.includes(num)) {
    num += 1;
  }

  if (num > 10) return;
  tmpSum *= num;

  recursion(cnt + 1, num, tmpSum); // 같은 수로 진행
  recursion(cnt + 1, num + 1, tmpSum); // 다른 수로 진행
  recursion(cnt, num + 1, tmpSum / num); // 방금 수를 넣지 않고 진행
};

solve();
