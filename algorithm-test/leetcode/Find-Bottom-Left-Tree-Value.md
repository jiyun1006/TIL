## Find Bottom Left Tree Value

> 단순히 왼쪽 값만을 생각해서 재귀를 이용해 풀었음. ---> 문제의 조건이 아님.  
> 오른쪽 값이라도 그 레벨에 그 값만 존재한다면, 가장 왼쪽의 값이 된다.

<br>

### 🪫 문제풀이

- 무조건 마지막 행에서 왼쪽의 값만 구하려고 했다.

- 자식 노드가 없는 동시에, 왼쪽 노드인 경우를 배열에 저장했다. ([레벨, 값])

- **생각해보면, 마지막 행에 오른쪽 값만 있는 경우도 사실 가장 오른쪽 값이면서 가장 왼쪽 값이기에, 조건에 해당된다.**

  ```js
  const searchNode = function (root, level, max) {
    if (root.left || root.right) {
      if (root.left.left === null && root.left.right === null) {
        max.push([level + 1, root.left.val]);
        return max;
      }

      if (root.left) searchNode(root.left, level + 1, max);
      if (root.right) searchNode(root.right, level + 1, max);
    }
    return max;
  };
  ```

<br>

### 🔋 바뀐풀이

- `bfs`를 이용해서 TreeNode를 레벨별로 queuq에 저장한다.

- queue는 왼쪽부터 순서대로 들어갔으니, 자동으로 가장 앞의 인덱스의 값이 가장 왼쪽의 값이다.

```js
const bfs = function searchLeftmostValue(root, level = 0, tree = []) {
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    const tmpArr = [];
    for (let i = 0; i < len; i += 1) {
      let node = queue.shift();
      tmpArr.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    tree[level] = tmpArr;
    level += 1;
  }
  return tree;
};
```

<br>

### 🔋 다른풀이

- solution에 더 좋은 코드가 있었다.

- 굳이 for문 돌릴 필요없이, left,rigth가 있으면 넣고 아니면 안넣는 방식이다.

  ```js
  var findBottomLeftValue = function (root) {
    const queue = [root];
    let leftmost = null;

    while (queue.length > 0) {
      leftmost = queue.shift();

      if (leftmost.right) {
        queue.push(leftmost.right);
      }
      if (leftmost.left) {
        queue.push(leftmost.left);
      }
    }

    return leftmost.val;
  };
  ```
