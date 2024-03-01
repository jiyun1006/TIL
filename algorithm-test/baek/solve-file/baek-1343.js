const fs = require("fs");
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';


let input = fs.readFileSync(filepath).toString().trim().split('\n');


// 정규표현식을 이용해서 간단하게 변환이 가능하다.
// 이후 indexOf를 이용해서 변환이 되지않은 기존 문자가 있는지 확인한다.   
const solve = (str) => {
  str = str.replace(/XXXX/g, 'AAAA');
  str = str.replace(/XX/g, 'BB');
  return str.indexOf('X') === -1 ? str : -1;
}

solve(...input);
