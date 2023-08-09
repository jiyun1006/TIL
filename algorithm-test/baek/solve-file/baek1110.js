// 더하기 사이클    

const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';
let input = Number(fs.readFileSync(filepath).toString());
let tmp = input;
let sum = 0;
let cnt = 1;


while (true) {
    sum = Math.floor(tmp / 10) + tmp % 10;
    tmp = (tmp % 10) * 10 + sum % 10;
    if (tmp === input) break;
    cnt++;
}

console.log(cnt);