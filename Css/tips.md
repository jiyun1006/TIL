## 자주 쓰이는 유용한 css   

> 자주 쓰이는 유용한 css 모음집 (헷갈리는 css)   

<br><br>   

### 🧸 box sizing   
---   

- `content-box`    

  - `content-box` 을 사용하게 되면, 전체 크기가 `content +  padding + border + margin` 이다.   

  - 따라서 설정한 컨텐츠 크기(width, height)의 값보다 커질 수 있다.   


- `border-box`   

  - `border-box` 는 컨텐츠 크기가 `전체 - border - padding - margin` 이다.   

  - 따라서 컨텐츠의 크기가 유동적으로 화면의 크기에 따라 자유자재로 변하게 된다.    


<br>

### 🧸 transform   
---   

- `transform-origin`   

  - `transform-origin` 의 속성 (%, %)는 각각 위치를 말하게 된다.   

  - 0%, 0% 는 좌측 상당 꼭지점을 의미하고, 100%, 100% 는 우측 하단 꼭지를 의미한다.   

  - 즉 20%, 80%는 우측에서 20%만큼, 상단에서 80%만큼 밑으로 갔다는 것을 의미한다.   


<br>

### 🧸 `transition`     
---   

- 보통 duration, timing-function(가속도), delay를 속성으로 사용한다.   

- `ex) trasition: 1s ease 2s`   

- `transform` 말고도 다른 `width`, `height` 등 과도 사용가능하다.   



<br>
