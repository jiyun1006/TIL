## Map    
> Object와는 다르게 Map iterator를 통한 순회가 쉽고, 키의 값을 다양하게 설정할 수 있는 자료구조이다.   


<br><br>

### 📷 Map의 장점   
---    

- key 값에 문자열이 아닌 값도 가능하다.   

- `메소드`를 통해서만 Map 객체 안의 프로퍼티를 수정하거나, 확인할 수 있다.   

- 이는 일반 객체보다 동작과 의도를 더 정확히 알 수 있다.   

  ```javascript
  // Map 객체 생성
  const tmp = new Map();

  // set으로 맵 객체에 삽입
  tmp.set("first", 1);

  // get으로 맵 객체 조회
  tmp.get("first"); // 1

  // delete로 삭제
  tmp.delete("first"); // 삭제가 성공하면 true를 반환

  // clear로 맵 안의 프로퍼티 전부삭제
  tmp.clear();
  ```   

- 순회가 깔끔하게 이루어 진다. (`for ... of` 사용)    
  *순회 시, Map iterator형태 (키-값 쌍으로 묶은 배열)로 이루어진다.*   



### `프로퍼티를 자주 변경해야 하는 경우에 사용하면 좋다.`
**ex) <a href="https://github.com/jiyun1006/TIL/blob/main/algorithm-test/programmers/2022-kakao(repoter).md">2022-kakao 신고결과받기 문제 </a>**

