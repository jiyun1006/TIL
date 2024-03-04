const fs = require("fs");
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';


let input = fs.readFileSync(filepath).toString().trim().split('\n');

const [node, __, startPoint] = input.shift().split(" ").map(Number);
const edge = input.map((el) => el.split(" ").map(Number));


const solve = (start, type) => {
  const graph = createGraph(node);
  let visited = Array.from(new Array(node + 1), () => 0);
  let visitedNode = [];
  switch (type) {
    case 'dfs':
      visitedNode = dfs(graph, visited, visitedNode, start);
      break;
    case 'bfs':
      visitedNode = bfs(graph, visited, visitedNode, start);
      break;
    
  }
  console.log(...visitedNode);
}

const dfs = (graph, visited, visitedNode, start) => {
  if (!visited[start]) {
    visited[start] = 1;
    visitedNode.push(start);
    const endArr = graph[start].sort((a,b) => a-b);
    for (let end of endArr) {
      dfs(graph, visited, visitedNode, end);
    }
  }
  return visitedNode;
}

const bfs = (graph, visited, visitedNode, start) => {
  const queue = [];
  queue.push(start);
  while(queue.length !== 0) {
    start = queue.shift();
    if (!visited[start]) {
      visited[start] = 1;
      visitedNode.push(start);
      queue.push(...graph[start].sort((a, b) => a - b));
      
    }
  }
  return visitedNode;
}


// 노드 그래프 만드는 함수.
const createGraph = (node) => {
  const graph = Array.from(new Array(node + 1), () => []);
  edge.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
  })
  return graph;
}


const typeArr = ['dfs', 'bfs'];
for (let type of typeArr) {
  solve(startPoint, type); 
}