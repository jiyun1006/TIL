## 운영체제 소개 및 구조     
> 간단한 운영체제 개론   


<br><br>


### 🚀 운영체제란?   
---   

- `정보`란 ?     
  - 불확실성 측정해서 수치적으로 표현한 것.   

  - 정보의 최소 단위 : `bit(binary digit)`      
    정보의 상태 변환 --> 즉 정보의 처리는 `Boolean Algebra(NOT, AND, OR)` 를 이용해서 한다.   

  - 논리 게이트 : NOT, AND, OR, XOR, NAND, NOR 를 이용해서 논리회로를 만들 수 있다.   
    논리 회로 : IC, LSI, VLSI, ULSI, SoC, .....   

<br>

- `폰 노이만`      
  - `stored-program computer`   
    메모리에 프로그램을 저장하는 컴퓨터    
  
  - RAM에 담겨있는 명령어를 `fetch`해서 CPU가 `execute`    
    `폰 노이만 아키텍쳐 - ISA(instruction-execution cycle)`    
    - first `fetches` an instruction from memory and stores that instruction in the `instruction register`      

  
<br>

- `운영체제`란?   
  - 컴퓨터에서 계속해서 실행되는 프로그램   
  
  - 앱에 시스템 서비스를 제공한다.    

  - manage `processes`, `resources`, `user interfaces`...    

    <img src="https://user-images.githubusercontent.com/52434993/172282092-24dc3b8c-05a0-465f-a457-6b4f23e61be4.png">


<br>

- `bootstrap`   
  - 컴퓨터가 커졌을 때, 메모리에 부트스트랩을 로딩한다.   
  - 그것을 통해 운영체제를 메모리에 로딩한다.   


<br>

- `interrupts`   
  - 입력 장치 등의 장치들의 신호를 cpu에 보내는 역할.



    

   



