## 프로세스와 스레드의 이해    
> 프로세스와 스레드의 전반적인 내용에 대한 이해


<br><br>
   

### 🚀 프로세스 & 스레드   
---   

- `프로세스`란?   
  프로그램을 메모리 상에서 실행중인 작업   

- `프로세스`의 메모리 공간    
  각각 별도의 주소공간을 할당한다.(독립적인 영역)   

  - `Code section`   
    the executable code(코드를 구성하는 메모리 영역)      

  - `Data section`    
    global variables(전역변수, 정적변수, 배열 등등....)   

  - `Heap section`    
    `memory` that is `dynamically allocated` during program run time(동적 할당 시에 사용된다.)     

  - `Stack section`   
    temporary data storage when invoking `functions`   

    such as function parameters, return addresses, and local variables(지역변수, 매개변수, 리턴 값등에 사용되는 임시 메모리 영역)       

    <br> 

    |layout of a process in memory|section|
    |---|:---:|
    |max|stack|
    ||heap|
    ||uninitialized data|
    ||initialized data|
    |0|text|   

    <br>    

  - `스레드`는 `Stack`만 따로 할당받고, 나머지 영역은 서로 `공유`한다.   

  **프로세스는 자신만의 고유한 공간과 자원을 할당 받지만, 스레드는 다른 스레드의 공간, 자원을 공유한다.**   

<br>


- 프로세스의 `state`   
  - `New` : the process is being created.   

  - `Running` : instructions are being excuted.   

  - `Waiting` : the process is waiting for some event to occur.   
                such as an I/O completion or reception of a signal.   

  - `Ready` : the process is waiting to be assigned to a processor.   

  - `Terminated` : the process has finished execution.   
  
  <br>

    <img src ="https://user-images.githubusercontent.com/52434993/172751045-ed0d9ee1-9f5a-4dfb-a90e-d5cd84b001c9.jpeg" width = "70%">
  
  <br>   


### 🚀 멀티 프로세스 & 멀티 스레드
---   

- `멀티 프로세스`   

  - 하나의 컴퓨터에 여러 cpu가 있고, 이를 통해 `여러 프로세스들을 동시`에 처리한다.(병렬)   

  - 안정성이 높다. (메모리 침범 문제를 OS차원에서 해결)   

  - 하지만 각각 독립된 메모리 영역을 가지고 있어, 작업량이 많을 수록 `오버헤드`가 발생한다. (`Context Switching`)   

    - `Context Switching`   
      프로세스의 상태 정보를 저장하고 복원하는 일련의 과정   

      동작 중인 프로세스가 대기(`state - waiting`)하면서 해당 프로세스의 상태를 보관하고,   
      대기하고 있던 다음 순번의 프로세스가 동작, 이전에 보관했던 프로세스 상태를 복구하는 과정      

      프로세스마다 `독립된 메모리 영역`을 할당 받으므로, 무거운 작업이 진행되면 `오버헤드`가 발생한다.   

<br>

- `멀티 스레드`   

  - 하나의 응용프로그램에서 여러 스레드가 하나의 작업을 처리한다.   

  - 독립적인 프로세스에 비해서, 공유 메모리만큼의 시간, 자원 손실이 적다.    

  - 하지만 공유 메모리를 가지기 때문에, 하나의 스레드가 고장나면, 모든 스레드가 작동을 중지한다. (`안정성 문제`)   

    - `Critical Section`   
      멀티 스레드의 안정성 문제에 대비하기 위한 기법.   

      하나의 스레드가 공유 데이터 값을 변경하는 시점에 다른 스레드가 그 값을 읽지 못하게 하는 기법.






