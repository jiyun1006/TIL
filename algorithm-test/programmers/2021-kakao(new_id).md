## 신규 아이디 추천
> 정규표현식들을 이용해서 해결할 수 있다.     

<br><br>

### 🪫 기존 풀이     

- 하나하나 조건마다 정규표현식을 사용했다.     

- `toLowerCase()` 로 대문자를 소문자로 변환.   

- `replace`를 이용해서 정규식에 맞는 조건으로 변환.   

- `/[^\w-.]/g`   
  - `\w` 문자열, 숫자, _ 를 포함   
  - `-.` 특수문자 -  .   를 포함   
  - `[^\w-.]` 는 위의 두 조건을 제외한 문자열을 찾는 정규식   

- `/[.]{2,}/g`   
  - `[.]{2,}` 는 특수문자 . 을 2번이상 반복된 문자열을 찾는 정규식   

- `/^\.|\.$/g`   
  - `^\.|.$` .으로 시작하거나 .으로 끝나는 문자열을 찾는 정규식

<br>

```javascript
function solution(new_id) {

    // 1단계
    new_id = new_id.toLowerCase();

    // 2단계
    new_id = new_id.replace(/[^\w-.]/g, '');

    // 3단계
    new_id = new_id.replace(/[.]{2,}/g, '.');

    // 4단계
    new_id = new_id.replace(/^\.|\.$/g, '');

    // 5단계
    if(new_id === '') new_id = 'a';

    // 6단계
    if(new_id.length >= 16) new_id = new_id.slice(0,15).replace(/^\.|\.$/g, '');

    // 7단계
    while(new_id.length <= 2){
        new_id += new_id[new_id.length - 1];
    }

    return new_id;
}
```   

<br>

### 🔋 다른 사람의 풀이 (Best)     

- js의 체이닝을 이용해서 더욱 깔끔하게 코드를 작성했다.   

<br>

```javascript
function solution(new_id) {
    const answer = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.+/g, '.') 
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15).replace(/\.$/, ''); 
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}


// padEnd 를 이용해서 마지막 조건 코드를 다시 짤 수 있다.   

// answer.padEnd(3, answer[answer.length-1]); 
// 길이가 3이 될 때까지 answer[answer.length-1]] 에 해당되는 인자를 추가한다.   

```   



<a href="#">정규 표현식</a>



