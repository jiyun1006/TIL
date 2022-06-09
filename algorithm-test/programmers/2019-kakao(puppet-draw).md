## 크레인 인형 뽑기
> 배열의 초기 형태를 변형해서 쉽게 풀어 낼 수 있었다. (transpose, reduce 활용)   

<br><br>

### 🔋 기존 풀이     

- 기존의 2차원 배열은 열별로 인형을 뽑아가는 형태에 적절하지 않아서,   
  새로운 2차원 배열을 만들어서, 위에 있는 숫자부터 쌓아둔 스택으로 만들었다.(js의 shift 활용하면 됨)   

- 이후, 새로 만든 배열을 이용해서, moves에 담겨있는 뽑는 순서를 지키며, 뽑아진 인형들을 처리하였다.   


  ```javascript
  function solution(board, moves) {
    let answer = 0;
    const newBoard = boardCreate(board);
    const storage = [];

    for(let move of moves){
        let tmp = newBoard[move-1].shift();
        if(!tmp) continue;
        if(storage[storage.length - 1] === tmp){
            answer += 2;
            storage.pop();
            continue;
        }
        storage.push(tmp);
    }
    return answer;
  }

  // 새로운 인형 배치 만드는 함수.
  // transpose와 비슷한 방식.
  function boardCreate(board) {
    const len = board.length;
    const newBoard = Array.from(Array(len), () => Array());

    board.map((el) => {
        for(let i = 0; i < len; i++){
            if(el[i] !== 0){
                newBoard[i].push(el[i]);
            }
        }        
    })   
    return newBoard;
  }
  ```   

  <br>

### 🔋 다른 사람의 풀이   

- 내가 만든 새로운 보드판 만드는 함수도, transpose의 원리를 이용한 것이었지만,   
코드의 길이가 너무 길어지는 단점이 있다.    

- 따라서 `reduce` 와 `map`을 활용한 transpose 방법을 이용하였다.    

  ```javascript
    function solution(board, moves) {
      let answer = 0;
      const stack = transpose(board).map((el) =>
          el.filter((i) => i !== 0)
      );
      console.log(stack);
      const ansArr = [];
      
      for(let move of moves) {
          let tmp = stack[move-1].shift();
          if(!tmp) continue; // 해당 열이 비어있는 경우.
          
          if(tmp === ansArr[ansArr.length - 1]){
              answer += 2;
              ansArr.pop();
              continue;
          }
          ansArr.push(tmp);
      }
      return answer;
  }

  const transpose = (matrix) => matrix.reduce(
      (acc, row) => row.map((_, idx) => [...(acc[idx] || []), row[idx]]), []);
  ```   
---      

<br>

- `transpose` 함수   

  ```javascript
  const transpose = (matrix) => matrix.reduce(
        (acc, row) => row.map((_, idx) => [...(acc[idx] || []), row[idx]]), []);
  ```   

  - 기본적으로 `reduce`에 대해 자세히 알아야 transpose 함수에 대한 이해가 쉽다.  

  <br> 

  ```javascript
  matrix.reduce((result, row) => ...... , []);
  ```
  - 여기서 `result`는 리턴 값에 의해 누적되는 값이고, `row`는 matrix를 순회하며 얻는 행이다.   

  - 또한 마지막 빈 배열은 `initialValue` 의 자리로, 처음의 result를 설정하는 값이다. `(처음 순회 당시에는 누적 값이 없기 때문에)`   

  <br>

  ```javascript
  row.map((_, idx) => [...(acc[idx] || []), row[idx]])
  ```     

  - `map` 함수 에서 `_` 자리에 오는 값들은 순회하며 오는 값이고, `idx`는 순회하는 index를 말한다.   

  - `[...(acc[idx] || []), row[idx]]` 는 계속해서 업데이트 되는 값들이다.   

    - 누적되는 `acc`들과 현재 순회중인 `row[idx]` 의 값을 더해가는 형식이다.   


<br>


<br>

### 주의할 점   
 <br>

- **배열을 만들 때, fill 메서드의 사용을 주의해야 한다.**   
  - **fill 메서드는 얕은 복사로 값들을 채우기 때문에, fill 메서드로 채운 행은 다 같은 객체 주소를 가지고 있다.**   

  <br>

- **첫번 째 풀이가 코드는 더욱 길지만, 시행 속도가 1/10 이라는 점에서, 코드 길이와 속도 중 어느 것을 택해야 하는지 고민이 되었다.**   

