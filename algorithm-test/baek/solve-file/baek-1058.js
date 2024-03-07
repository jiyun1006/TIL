const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let input = fs.readFileSync(filepath).toString().trim().split('\n');

const solve = () => {
  const peopleNum = Number(input.shift());
  let graph = Array.from({ length: peopleNum }, () =>
    Array(peopleNum).fill(Number.MAX_SAFE_INTEGER),
  );

  input.map((el, idx) => {
    const tmp = el.split('');
    for (let i = 0; i < tmp.length; i += 1) {
      if (tmp[i] === 'Y') {
        graph[i][idx] = 1;
      }
    }
  });

  graph = search(graph);
  let ans = 0;
  for (let i = 0; i < peopleNum; i += 1) {
    let tmp = 0;
    for (let j = 0; j < peopleNum; j += 1) {
      if (graph[i][j] <= 2) tmp += 1;
    }
    ans = Math.max(ans, tmp);
  }
  console.log(ans);
};

const search = function FloydWarshall(dist) {
  const len = dist.length;

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      for (let k = 0; k < len; k += 1) {
        if (
          j !== k &&
          dist[j][i] !== Number.MAX_SAFE_INTEGER &&
          dist[i][k] !== Number.MAX_SAFE_INTEGER
        )
          dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
      }
    }
  }
  return dist;
};

solve();
