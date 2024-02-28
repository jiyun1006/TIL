## Count And Say   
> 문자열 속에서 이전 문자와 비교하면서 풀이   


<br>


### 🔋 기존풀이   

- 문자열에서 이전 문자와의 비교를 통해 현재 문자의 개수를 구하고, 새로운 문자열을 만든다.    
- `createString` 함수에서 문자 비교하는 기능을 담당하고,
  메인 함수에서는 while문을 통해서 주어진 횟수만큼 반복하게 한다.    



```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let answer = "1";
    if (n === 1) return answer;
    while(n !== 1){
        answer = createString(answer);
        n -= 1;
    }
    return answer;
};

const createString = (strs) => {
    const strList = [...strs];
    let [before, tmpAns, cnt]  = ['', '', 0];
    for(let str of strList){
        if(before === str) cnt += 1;
        else {
            tmpAns += before ? cnt + before : '';
            before = str;
            cnt = 1;
            }
    }
    tmpAns += cnt + before;
    return tmpAns
}
```   

- **문자열끼리 수식으로 계산하는 것보다 백틱(Template literals) 을 사용하는 것이 좋아보인다.**   


```javascript

tmpAns += before ? cnt + before : '';
// 백틱을 이용하여 수정
tmpAns += before ? `${cnt}${before}` : '';

```

