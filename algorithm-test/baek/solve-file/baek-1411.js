const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let input = fs.readFileSync(filepath).toString().trim().split('\n');

const N = Number(input.shift());
const strsArr = input.map((el) => el.split(''));

const solve = () => {
  let ans = 0;
  for (let i = 0; i < N - 1; i += 1) {
    for (let j = i + 1; j < N; j += 1) {
      if (change([strsArr[i], strsArr[j]])) ans += 1;
    }
  }
  console.log(ans);
};

const change = (strs) => {
  const arrs = [];
  for (const arr of strs) {
    let cnt = 0;
    for (let i = 0; i < arr.length; i += 1) {
      const tmp = arr[i];
      if (!isNaN(tmp)) continue;
      for (let j = i + 1; j < arr.length; j += 1) {
        if (tmp === arr[j]) arr[j] = cnt;
      }
      arr[i] = cnt;
      cnt += 1;
    }
    arrs.push(arr);
  }
  return arrs[0].join('') === arrs[1].join('');
};

solve();
