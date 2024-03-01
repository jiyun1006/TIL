const fs = require("fs");
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';


let input = fs.readFileSync(filepath).toString().trim().split('\n');


const solve = () => {
  const [oneArr, zeroArr] = [calCnt('1', input[0]), calCnt('0', input[0])];
  return oneArr.length < zeroArr.length ? oneArr.length : zeroArr.length;
}

// 0과 1을 기준으로 문자열을 나눠서 각각의 1과 0의 묶음이 몇개인지 확인하는 함수.
const calCnt = (num, str) => {
  const strArr = str.split(num);
  return strArr.filter((el) => el);
}

const ans = solve();
console.log(ans);
