## 숫자 문자열과 영단어   
> split과 join을 이용해 코드를 짧게 줄였다.   

<br><br>

### 🪫 기존 풀이     

- 정규표현식을 사용해서 숫자로 `split`를 한 다음,   

  나온 문자열들을 숫자로 매칭될 때까지 순회하면서 숫자로 변환한다.   

  ```javascript
  function solution(s) {
    let answer = '';
    const numWord = {'zero' : 0, 'one' : 1, 'two' : 2, 'three' : 3, 'four' : 4, 'five' : 5,
                    'six' : 6, 'seven' : 7, 'eight' : 8, 'nine' : 9};
    let tmp = '';

    const wordKey = Object.keys(numWord);
    for (let letter of s) {
        if(/[^0-9]/g.test(letter)){
            tmp += letter;
            if(wordKey.includes(tmp)){
                answer += numWord[tmp];
                tmp = '';
            }
        }else{
            answer += letter;
        }
    }
    return +answer;
  }
  ```   

<br>  


### 🔋 다른 사람 풀이 (best)   

- 'zero' ~ 'nine' 까지의 배열을 만들고,   

  순서대로 주어진 조건 문자열을 `split`, `join`을 이용해서 문자열을 변환시켜나간다.   

- 어차피 문자열에 들어있지 않은 숫자 문자열이면, `split ---> join 의 과정에서 아무 변화가 없다`.   

- 코드 길이도 상당히 짧고, 너무 깔끔했다.   

  ```javascript
  function solution(s) {
      let answer = '';
      const numStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      
      for(let i = 0; i < 10; i++) {
          s = s.split(numStr[i])
          s = s.join(i);
      }
          
      return +s;
  }
  ```