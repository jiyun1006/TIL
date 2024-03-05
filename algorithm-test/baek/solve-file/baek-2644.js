const fs = require("fs");
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let input = fs.readFileSync(filepath).toString().trim().split('\n');


const solve = () => { 
  const peopleNum = Number(input.shift());
  const [target1, target2] = input.shift().split(" ").map(Number);
  const __ = Number(input.shift());
    
  const edge = input.map((el) => el.split(" ").map(Number));
  const graph = Array.from({ length: peopleNum + 1 }, () => []);
  const visited = Array.from({ length: peopleNum + 1 }, () => 0);
  edge.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
  })

  const queue = [[target1, 0]];

  while (queue.length) {
    const [tmp, idx] = queue.shift();
    if (tmp === target2) return idx;
    visited[tmp] = 1;
      
    for (let node of graph[tmp]) {
      if (!visited[node]) {
        queue.push([node, idx+1]);
      }
      
    }
  }
  return -1;
}

const cnt = solve();
console.log(cnt);