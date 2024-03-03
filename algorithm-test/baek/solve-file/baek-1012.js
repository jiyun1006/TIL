const fs = require("fs");
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';


let input = fs.readFileSync(filepath).toString().trim().split('\n');
let testNum = Number(input.shift());
let ans = 0;

const solve = (input) => {
  let [board, targetPoint] = [[], []];
  [board, targetPoint, input] = createBoard(input);

  while (targetPoint.length !== 0) {
    const target = targetPoint.shift();
    if(board[target[0]][target[1]]) ans += 1;
    dfs(board, target);
  }
  return ans;
}

const dfs = (board, target) => {
  const [x, y] = [...target];
  if (board[x][y]) {
    board[x][y] = 0;
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const [maxRow, maxCol] = [board.length, board[0].length];

    for (let i = 0; i < 4; i += 1) {
      let X = dx[i] + x;
      let Y = dy[i] + y;
      if ((X < maxRow && X >= 0) && (Y < maxCol && Y >= 0) && board[X][Y]) {
        dfs(board, [X, Y]);
      }
    }
  }
}

const createBoard = (strArr) => {
  const [col, row, targetNum] = strArr.shift().split(" ").map((el) => +el);
  const board = Array.from(Array(row), () => new Array(col).fill(0));
  const targetPoint = [];
  for (let i = 0; i < targetNum; i += 1){
    const xy = strArr.shift().split(" ").map((el) => +el).reverse();
    targetPoint.push(xy);
    board[xy[0]][xy[1]] = 1;
  }
  return [board, targetPoint, strArr];
}

while (testNum) {
  ans = solve(input);
  console.log(ans);
  testNum -= 1;
  ans = 0;
}

