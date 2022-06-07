## 문자열 압축 
> slice와 반복문을 이용해서 문제의 조건을 풀어 나갔다.   

<br><br>

### 🔋 풀이     

- 묶음의 개수를 하나씩 늘려가야 하는 반복문과 
  그 반복문 안에서 전체 문자열을 도는 반복문으로 문제 조건을 풀어나간다.   


```javascript
function solution(s) {
    let answer = s.length;
    const len = parseInt(s.length/2);
    for (let i=1; i<len+1; i++){
        let temp = "";
        let cnt = 1;
        let sub_str =  s.substr(0,i);
        for (let j=i; j < s.length; j+=i){
            const temp_str = s.substr(j,i);
            if (sub_str === temp_str){
                cnt++;
            }else{
                temp += (cnt > 1 ? cnt + sub_str : sub_str)
                sub_str = temp_str;
                cnt = 1;
            }
        }

        temp += (cnt > 1 ? cnt + sub_str : sub_str);
        answer = (temp.length < answer ? temp.length : answer)
    }


    return answer;
}
```   

- 다른 사람의 풀이 중, map과 reduce를 최대한 활용하여 코드 수를 줄인 코드가 있었지만,
  효율성에서 약간 떨어지고, 심한 압축으로 인해 가독성이 좋아 보이진 않았다.   

- 실제로 어떨진 몰라도 때로는 간단히 푸는 것이 나을 때도 있는 듯 하다.   
