const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let input = fs.readFileSync(filepath).toString().trim().split('\n');
const [row, col, K] = input.shift().split(' ').map(Number);
const graph = [];
for (let i = 0; i < row; i += 1) {
  graph.push(input.shift().split(''));
}

const solve = () => {
  const start = [row - 1, 0];
  const visited = Array.from({ length: row }, () => Array(col).fill(0));
  visited[row - 1][0] = 1;
  const ans = dfs(visited, 1, start);
  console.log(ans.length);
};

const dfs = (visited, cnt, xy, ans = []) => {
  const [x, y] = xy;
  const dx = [-1, 0, 0, 1];
  const dy = [0, -1, 1, 0];
  for (let i = 0; i < 4; i += 1) {
    let X = x + dx[i];
    let Y = y + dy[i];
    if (
      X < row &&
      X >= 0 &&
      Y < col &&
      Y >= 0 &&
      graph[X][Y] !== 'T' &&
      !visited[X][Y]
    ) {
      if (X === 0 && Y === col - 1 && cnt + 1 === K) {
        ans.push(0);
      }
      visited[X][Y] = 1;
      dfs(visited, cnt + 1, [X, Y], ans);
      visited[X][Y] = 0;
    }
  }
  return ans;
};

solve();
