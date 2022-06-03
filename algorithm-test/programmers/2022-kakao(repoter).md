## 신고 결과 받기   
> Map과 Set을 이용해 코드를 더 깔끔하게 만들었다.   

<br><br>

### 🪫 기존 풀이   

```javascript
function solution(id_list, report, k) {
    const listLen = id_list.length;
    const answer = Array.from(Array(listLen), () => 0);
    
    // k가 id_list의 수 이상이면, 아무도 메일을 받지 못한다.
    if(k >= listLen){
        return Array.from(Array(listLen), () => 0);
    }
    
    const reportId = {}
    
    // 신고당한 사람을 누가 신고했는지 알 수 있게 하는 딕셔너리
    report.map((el) => {
        let [id1, id2] = el.split(" ");
        if(!reportId[id2]){
            reportId[id2] = '';
        }
        reportId[id2] += [id1 + " "];
    })

    const reporter = Object.values(reportId).map((el) => {
        const cntList = el.trimEnd().split(" ");
        const tmpSet = new Set(cntList);
        const realList = [...tmpSet]
        if(realList.length >= k){
            while(realList.length > 0){
                let tmp = realList.pop();
                answer[id_list.indexOf(tmp)] += 1;
            }
        }
    });
    
    
    return answer;
}
```   

<br>

- dictionary 자료구조를 이용해서, 신고당한 사람이 몇 번 신고당했는지 수를 세었고, 신고한 사람을 저장했다.   

- 그리고, 저장된 신고한 사람들을 다시 불러내어 메일을 받는 수를 계산했다.   

- 일련의 과정중에 너무 반복되고, 불필요한 과정이 많아서, 코드가 길어지게 되었다.   


<br>


### 🔋 다른 사람의 풀이 (Best)    

- 기본적으로 Map 자료구조를 이용해서 깔끔하게 코드를 작성했다.   

- 또한 처음에 report 객체를 조건에 맞게 깔끔하게 변환 시켰다.    


```javascript
function solution(id_list, report, k) {
    let answer = [];
    const reports = [...new Set(report)].map((el) => el.split(" "));
    
    // 신고당한 사람이 몇 번 신고당했는지 세는 부분.
    const counts = new Map(); 
    reports.map((el) => {
        counts.set(el[1], counts.get(el[1]) + 1 || 1);        
    })
    
    // k 번 이상 신고한 사람을 신고한 사람을 찾는 부분.
    const reporter = new Map();
    reports.map((el) => {
        if(counts.get(el[1]) >= k){
            reporter.set(el[0], reporter.get(el[0]) + 1 || 1);
        }
    })
    
    
    answer = id_list.map((el) => reporter.get(el) || 0);
    
    
    return answer;
}
```   


### <a href="https://github.com/jiyun1006/TIL/blob/main/data-structrue%26algorithm/Map.md">Map 자료구조</a>