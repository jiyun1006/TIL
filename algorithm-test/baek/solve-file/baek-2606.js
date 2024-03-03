const fs = require("fs");
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';


let input = fs.readFileSync(filepath).toString().trim().split('\n');

const node = Number(input.shift());
const edge = Number(input.shift());

const graph = Array.from(new Array(node+1), () => []);

input.forEach((el) => {
  const point = el.split(" ").map((el) => +el);
  graph[point[0]].push(point[1]);
  graph[point[1]].push(point[0]);
})


const visited = Array.from(new Array(node + 1), () => 0);
visited[1] = 1;
let ans = 0;

const dfs = (startPoint) => {
  for (let endPoint of graph[startPoint]) {
    if (!visited[endPoint]) {
      visited[endPoint] = 1;
      dfs(endPoint);
      ans += 1;
    }
  }
}

dfs(1);
console.log(ans);
