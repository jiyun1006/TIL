## 로또의 최고 순위와 최저 순위
> 기존의 긴 코드를 filter를 이용해서 짧게 간추릴 수 있다.   

<br><br>

### 🪫 기존 풀이    

```javascript
function solution(lottos, win_nums) {
    const answer = [];
    let cnt = 0;
    let zeroCnt = 0;
    lottos.map((lotNum) => {
        if(lotNum === 0) zeroCnt++;
        if(win_nums.indexOf(lotNum) !== -1) cnt++;
    })

    // 최고 순위 번호
    if(cnt + zeroCnt <= 1) answer.push(6);
    else answer.push(7- cnt - zeroCnt);

    // 최저 순위 번호.  
    if(cnt <= 1) answer.push(6);
    else answer.push(7-cnt);

    return answer;
}

```   

<br>

- map으로 배열을 순회하며 로또번호를 맞추며 몇개 맞았는지 체크한다.    

- 이후, 조건에 나온 개수로 등수를 계산한다.   

<br>

### 🔋 다른 사람의 풀이 (Best)    

- 알고리즘 자체는 다르지 않았지만, filter를 이용해서 더 깔끔해 보였다.     

- `0` 이 나오면 어떻게든 로또 번호를 맞출 수 있다는 조건을 `!0` 을 이용한 것이 돋보였다.


```javascript
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    const cnt = lottos.filter((el) => win_nums.includes(el)).length;
    const zeroCnt = lottos.filter((el) => !el).length;
    
    const maxCnt = cnt + zeroCnt;
    
    return [rank[maxCnt], rank[cnt]]
}
```