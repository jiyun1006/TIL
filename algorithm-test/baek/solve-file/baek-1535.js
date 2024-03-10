const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let input = fs.readFileSync(filepath).toString().trim().split('\n');

const N = Number(input.shift());

// const lifeArr = input.shift().split(' ').map(Number);
// const enjoyArr = input.shift().split(' ').map(Number);
const set = new Set();

// 재귀로 푼 부분
const recursion = function printMaxEnjoy(idx = 0, LIFE = 100, ENJOY = 0) {
  let [tmpLife, tmpEnjoy] = [LIFE, ENJOY];
  if (idx >= N) {
    return;
  }

  tmpLife -= lifeArr[idx];
  if (tmpLife <= 0) {
    recursion(idx + 1, (tmpLife += lifeArr[idx]), tmpEnjoy);
    return;
  }

  tmpEnjoy += enjoyArr[idx];

  set.add(tmpEnjoy);

  recursion(idx + 1, tmpLife, tmpEnjoy);
  recursion(idx + 1, (tmpLife += lifeArr[idx]), (tmpEnjoy -= enjoyArr[idx]));
};

// recursion();
// const setArr = [...set];
// isFinite(Math.max(...setArr))
//   ? console.log(Math.max(...setArr))
//   : console.log(0);

// -------
// dp 이용

// 0을 앞에 넣은 이유는 초기값을 위함.
const life = [0, ...input.shift().split(' ').map(Number)];
const enjoy = [0, ...input.shift().split(' ').map(Number)];

const dp = Array.from({ length: N + 1 }, () => new Array(101).fill(0));

for (let i = 1; i < N + 1; i += 1) {
  for (let j = 1; j < 101; j += 1) {
    // 라이프 1 부터 100까지.
    if (life[i] < j) {
      // 이전 기쁨이 더해진 기쁨과  현재 기쁨이 더해진 기쁨을 비교
      // 이전기쁨 (dp[i-1][j])
      // 이전 기쁨(dp[i-1][j-life[i]]) (life[i]만큼 뺀 index는 이전기쁨으로 채워지기 시작한 위치) + 현재 기쁨(enjoy[i]);
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - life[i]] + enjoy[i]);
      continue;
    }
    dp[i][j] = dp[i - 1][j];
  }
}

console.log(dp[N][100]);
