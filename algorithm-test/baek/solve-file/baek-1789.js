const fs = require("fs");
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';


let input = fs.readFileSync(filepath).toString().trim().split('\n');

input = Number(input[0]);
let i = 0;
while (1) {
  input -= i;
  i += 1;
  let tmp = input;
  if ((tmp -= i) < i + 1) {
    console.log(i);
    break;
  } 
  
}
  