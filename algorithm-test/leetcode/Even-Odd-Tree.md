## Even Odd Tree   
> 트리 클래스를 이용한 bfs 문제   

<br>


### 🔋 문제풀이   

- 문제에서 트리가 클래스형으로 주어져있다.   
- 이 클래스를 이용해서 다시 그래프를 만들려 했으나, 너무 많은 코드량이 생기고 불필요한 것을 알았다.     
- bfs를 이용하므로, 기존의 트리를 queue 객체안에 넣어준다.   
  이후, queue의 길이에 따라 반복되는 while 문을 사용한다.   

```js
let queue = [root];
let level = 0;

while(queue.length > 0){
        // --- 생략 ---
}

```   


<br>

- while문 안에서는 각각의 level에서 문제에서 주어진 조건(오름차순, 내림차순)을 만족하는지 확인한다.   
- `Number.MIN_SAFE_INTEGER` 와 `Number.MAX_SAFE_INTEGER` 를 이용해서, 초기의 작은 수와 큰 수를 설정한다.   

```js
  let prevVal = (level % 2 === 0) ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
```   

<br> 

- 다음 level 별 node 개수에 따라 반복문을 진행한다.   
- 반복문 안에서, 먼저 이전 node와 현재 node를 비교해서 조건(오름차순, 내림차순)이 맞는지 확인한다.   

```js
while(queue.length > 0){
  // --- 생략 ---

        for(let i = 0; i < size; i += 1){
            let node = queue.shift();

            if((level % 2 === 0 && (node.val % 2 === 0 || node.val <= prevVal)) ||  
            (level % 2 === 1 && (node.val % 2 === 1 || node.val >= prevVal))) {
                return false;
            }

  // --- 생략 ---
```   

<br>

- 조건을 만족한다면, 이전 node 객체 (`prevVal`)를 현재 노드의 value로 저장해준다.   
- 이후 좌, 우 node가 존재하는지 확인하고, 존재한다면 queue에 넣어서 while문을 진행한다.   

```js
while(queue.length > 0){
      // --- 생략 ---

            prevVal = node.val;

            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }      
        }
        level += 1;
    }
```   

<br><br>

---
>전체코드    
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if (!root) {
        return true;
    }
    let queue = [root];
    let level = 0;

    while(queue.length > 0){
        let size = queue.length;
        let prevVal = (level % 2 === 0) ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

        for(let i = 0; i < size; i += 1){
            let node = queue.shift();

            if((level % 2 === 0 && (node.val % 2 === 0 || node.val <= prevVal)) ||  
            (level % 2 === 1 && (node.val % 2 === 1 || node.val >= prevVal))) {
                return false;
            }

            prevVal = node.val;

            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }      
        }
        level += 1;
    }

    return true;
};
```
