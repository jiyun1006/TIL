## Longest Common Prefix   
> 접두어를 찾는 문제 --> indexOf, substr등을 이용하여 해결   

<br>

### 🔋 문제풀이   


- 처음 문자열 배열에서 가장 길이를 기준으로 오름차순 정렬을 해준다.   
  최대한 적은 수의 순회를 위해서.   

- 이후에, 뒤에서부터 하나씩 문자열을 없애면서, 공통된 부분이 있는지 체크한다.(`indexOf`, `substr` 사용)

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    // 먼저 길이 오름차순으로 배열 정렬
    const sortArr = strs.sort((a,b) => a.length - b.length);
    let answerList = [];
    let prefix = sortArr[0];
    
    for(let str of sortArr){
        while(str.indexOf(prefix) != 0){
            prefix = prefix.substr(0, prefix.length-1);
        }
    }
    return prefix;
    
};

```  

<br>

--- 

<br>


> indexOf   

- 문자열에서 target이 되는 문자열이 있다면, 시작 index를 알려주고, 없다면 -1를 반환하는 메서드.   

```javascript
const tmp  = 'p';
const word = 'apple';

console.log(word.indexOf(tmp))  // 1이 반환된다.   

const tmp2 = 'z'

console.log(word.indexOf(tmp2)) // -1이 반환된다.   
```


<br>


> 문자열 자르기   

- substr(시작위치, 길이)   

- substring(시작위치, 마지막 index -1)   

- slice(시작위치, 종료위치) or slice(시작위치)
