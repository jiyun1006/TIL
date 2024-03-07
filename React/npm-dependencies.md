## dependencies vs devDependencies

> npm install 할 때 --save 와 --save-dev의 차이를 알아보자.

<br><br>

### 패키지 종속성

---

- 어플리케이션을 만들 때, 라이브러리를 설치하면 `package.json`에 설치한 라이브러리가 저장된다.

- 하지만, `npm i [라이브러리] (--save)`로 설치하는 경우와
  `npm i -D [라이브러리]` 또는 `npm i [라이브러리] --save-dev`로 설치한다.

- 둘 간에는 어떠한 차이가 있을까?

<br>

```json
"devDependencies": {
    "eslint": "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "prettier": "^3.2.5",
    "eslint-config-airbnb": "^19.0.4"
  },

```

- 현재 `TIL` 저장소의 `package.json`의 모습이다.

- **개발당시에는 필요하지만** 만약, 배포를 한다고 했을 때는 필요없는 `eslint`, `prettier`은 `devDependencies` 에 들어있다.

  - 예시로 `eslin-config-prettier`을 설치할 때는,

    ```
    npm install -D eslint-config-prettier
    (또는)
    npm install eslint-config-prettier --save-dev
    ```

    와 같이 하면 된다.

- `dependencies`에는 어플리케이션의 동작에도 필요한 라이브러리를 담는 곳이다.  
   (현재 저장소에는 개발 공부한 것을 저장하는 곳이기에, 특별한 라이브러리가 필요하지 않다.)  
  _npm 버전5 이후로는 --save가 default 사양이 되어서, 따로 기입하지 않아도, dependencies에 저장된다._

  ```
  npm install [라이브러리] (--save)
  ```

    <br>

## <br>

**결국 `dependencies`는 어플리케이션 동작과 관련된 라이브러리를 `devDependencies`는 개발할 때 필요한 라이브러리를 저장하는 곳이다.**  
**배포할 때 불필요한 라이브러리를 줄이기 위한, 행동이라고 생각하면 될 것 같다.**
