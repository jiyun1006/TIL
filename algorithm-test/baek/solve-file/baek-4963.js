const fs = require("fs");
const filepath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';

let input = fs.readFileSync(filepath).toString().trim().split('\n');
input.pop();


const solve = () => {
  // 입력문을 각각의 graph로 만드는 코드.
  while (input.length) {
    let [col, row] = input.shift().split(" ").map(Number);
    let graph = Array.from({ lenght: row }, () => []);
    const landGraph = [];
    for (let i = 0; i < row; i += 1){
      const tmp = input.shift().split(" ").map(Number);  
      
      // 섬이 있는 부분을 기록하기 위한 코드
      let idx = 0
      while (tmp.indexOf(1, idx) !== -1) {
        idx = tmp.indexOf(1, idx);
        landGraph.push([i, idx]);
        idx += 1;
      }
      graph.push(tmp);
    };

    let ans = 0;
    for (let node of landGraph) {
      if (graph[node[0]][node[1]]) {
        graph = dfs(graph, node);
        ans += 1;
      };
    };
    console.log(ans);
  }
}

const dfs = (graph, xy) => {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  const [x, y] = xy;
  graph[x][y] = 0;

  for (let i = 0; i < dx.length; i += 1){
    const X = dx[i] + x;
    const Y = dy[i] + y;
    if ((X >= 0 && X < graph.length) && (Y >= 0 && Y < graph[0].length) && graph[X][Y]) {
      dfs(graph, [X, Y]);
    }
  };
  return graph;
}

solve();