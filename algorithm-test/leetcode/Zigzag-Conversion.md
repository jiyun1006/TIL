## Zigzag Conversion   
> 문제의 조건에서 나올 수 있는 규칙을 파악하여 해결.   

<br>

### 🔋 기존풀이        

- 특별한 규칙에 대한 탐색없이, 단순히 행과 열의 변화에만 집중해서 문제를 풀이함. 
- 또한 이차원 배열이 필요하지 않았음에도, 이차원 배열을 만들어서 사용.      
- 많은 테스트케이스를 대응하지 못했고, 통과하지 못함. 


```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s
    const numCols = calNumCol(s, numRows);
    const arr = Array.from(Array(numRows), () => new Array(numCols).fill(""));
    const arrS = [...s];
    const board = fillArr(arr, arrS);
    let answer = ''
    board.forEach((el) => {
        answer += el.join('');
    })
    return answer
};

const calNumCol = (word, row) => {
    const wordLen = word.length;
    const numCol = (row - 1) ? Math.ceil(wordLen / (row - 1)) : 1;
    return numCol;
}

// row가 0이면 한 col에 끝까지 push()
// 그 다음 row를 1씩 줄이며 0이 될 때까지 col에 하나씩만 push()
const fillArr = (board, word) => {
    const boardRow = board.length;
    let BOOLEAN = true;
    let [row, col] = [0, 0];
    for(let el of word){
      // 행과 열에만 집중하고 풀이.
        if(row <boardRow && BOOLEAN){
            if(row === boardRow-1){
                board[row][col] = el;
                BOOLEAN = !BOOLEAN;
                row -= 1;
                col += 1;
                continue;
            }
            board[row][col] = el;
            row += 1;
        }else{
            board[row][col] = el;
            row -= 1;
            col += 1;
            if(row === 0) BOOLEAN = !BOOLEAN;
        }
    }
    return board;
}
```

<br>

### 🔋 다른 사람의 풀이   

- 지그재그의 방식으로 움직이는 규칙을 파악하여 해결      

```
P   A   H   N
A P L S I I G
Y   I   R
```

*0 1 2 1 0 1 2 1 0 ... 와 같이 진행된다.*   
*numRows = 3인 경우에, 4번의 문자이후, 다시 처음으로 돌아와 같은 방법으로 반복된다.*   



```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s
    const arr = Array(numRows).fill('');
    const keyNum = (numRows-1) * 2;
    const wordArr = [...s];

    wordArr.forEach((word, idx) => {
        const row = idx % keyNum;
        row < numRows ? arr[row] += word : arr[keyNum - row] += word;
    })
    
    return arr.join('');
};

```





