## 객체 (object)   

> 자바스크립트의 객체는 key 와 value로 구성된 프로퍼티 집합이다.


<br><br>

### 🚀 객체(Object)란?   
---   

- `객체`는 데이터를 의미하는 `프로퍼티`와 동작을 의미하는 `메서드`로 구성된 집합이다.   

- 또한 객체지향의 상속 개념을 구현하기 위해, `프로토타입`이라고 불리는 객체의 프로퍼티와 메서드를 상속받을 수 있다.    


<br>

### 🚀 객체 생성 방법   
---   

- 객체 리터럴   
  - 중괄호 (`{}`)를 이용해서 객체를 생성한다.   

    ```javascript
      var person = {
        name: 'Lee', // 하나의 프로퍼티 (프로퍼티 이름 + 프로퍼티 값)
        gender: 'male',
        sayHello: function () {
          console.log('Hi! My name is ' + this.name);
        }
      }; 
    ```     

<br>

- Object 생성 함수   
  - `new` 연산자와 `Object` 생성자 함수를 호출해서 빈 객체를 생성할 수 있다.    

    - `생성자 함수`란 new 키워드와 함께 객체를 생성하고 초기화하는 함수이다.    
    - 이를 통해 생성된 객체를 `인스턴스`라 한다.    
    - 보통의 `생성자 함수`는 일반 함수와 구분하기 위해 `PascalCase`를 사용한다.   

    ```javascript
      // 빈 객체의 생성
      var person = new Object();

      // 프로퍼티 추가
      person.name = 'Lee';
      person.gender = 'male';
      person.sayHello = function () {
        console.log('Hi! My name is ' + this.name);
      };
    ```   

  - `객체 리터럴` 방식이 더 간편하다.   
  - 또한 `객체 리터럴` 방식을 쓴다하여도, 자바스크립트 엔진이 내부적으로 `Object 생성자 함수`를 사용한다.      
    *(따라서, Object 생성자 함수 방식으로 객체를 생성할 이유가 없다.)*   

<br>


- 생성자 함수   
  - `프로퍼티`값이 계속 달라지는 객체를 생성할 때, 유용한 방식이다.   

    ```javascript
      function Person(name, gender) {
        this.name = name;
        this.gender = gender;
        this.sayHello = function(){
          console.log('Hi! My name is ' + this.name);
        };
      } 
    ```   

  - `this`는 생성자 함수가 생성할 인스턴스를 가리킨다.    

  - `this`에 바인딩된 프로퍼티와 메서드는 `public`(외부 참조 가능) 하다.   

  - 생성자 함수내에 `일반 변수`는 `private`(외부 참조 불가능) 하다.   

    ```javascript
    function Person(name, gender) {
      var married = true;         // private
      this.name = name;           // public
      this.gender = gender;       // public
      this.sayHello = function(){ // public
        console.log('Hi! My name is ' + this.name);
      };
    }

    var person = new Person('Lee', 'male');

    console.log(typeof person); // object
    console.log(person); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }

    console.log(person.gender);  // 'male'
    console.log(person.married); // undefined
    ```    

  - `생성자 함수`는 일반 함수에 `new` 연산자를 붙여도 작동을 하기 때문에,   
    앞의 네이밍을 대문자로 하는 규칙을 가진다.   

