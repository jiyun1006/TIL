## 오픈 채팅방 
> Map 객체를 이용해서 계속 닉네임을 교체하였다.   
 
<br><br>
 
### 🔋 풀이    

- 유저 아이디와, 닉네임은 겹치지 않으므로, 하나의 key와 하나의 value만을 가지는 `Map`이 어울릴 것 같다고 생각했다.   

- `Map` 객체를 이용해서 Leave 명령어 나올 때 빼고는 계속해서 닉네임을 업데이트 했다.   


```javascript
let solution = (record) => {
    const answer = [];
    const idName = new Map();
    const tmpArr = [];

    record.map((el) => {
        const [status, id, name] = el.split(" ");
        if(status !== "Leave") idName.set(id, name);
        if(status !== "Change") tmpArr.push([status,id]);
    })    
    
    tmpArr.map((el) => {
        if(el[0] === "Enter"){
            answer.push(`${idName.get(el[1])}` + "님이 들어왔습니다.");
        }else{
            answer.push(`${idName.get(el[1])}` + "님이 나갔습니다.")
        }
    })
    
    return answer;
}
```