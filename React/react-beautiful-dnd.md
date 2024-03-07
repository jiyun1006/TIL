## react-beautiful-dnd (drag & drop)

> 드래그를 통해서 영역을 변경할 수 있다.

<br><br>

### 초기 세팅

---

- 라이브러리를 설치하기 위해 밑의 코드를 입력한다.
  ```
  npm install react-beautiful-dnd
  ```
- 또한 index.js에서 `React.StrictMode` 를 끈다.

<br>

### DND(drag & drop)의 컴포넌트

---

| 컴포넌트            | 설명                                   |
| :------------------ | :------------------------------------- |
| **DragDropContext** | DND의 상태를 제공하는 요소.            |
| **Droppable**       | Drop할 수 있는 영억으로 명시.          |
| **Draggable**       | Drag할 수 있게 컴포넌트를 감싸는 역할. |

<img src ="../assets/53607406-c8f3a780-3c12-11e9-979c-7f3b5bd1bfbd.gif"
width = "30%" height = "10%">

<br>

### to-do list에 간단한 적용

---

<br>

- 기본적으로 `DragDropContext`로 감싸주면서 이벤트를 넣어준다.
- 또한 `Droppable`와 `Draggable`는 id를 가진다.

<br>

```js
<Droppable droppableId="todo">
  {(provided) => (
    <div {...provided.droppableProps} ref={provided.innerRef}>
  {todoData.map((data, index) => (
              <Draggable
                key={data.id}
                draggableId={data.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
                  className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  border rounded`}>
    // --- 생략 ---

                </Draggable>
            ))}
              {provided.placeholder}
            </div>
            )}
</Droppable>

```

- `provided`

  - `droppableId` 는 drop 가능한 여역을 구분하기 위함.
  - `provided.droppableProps` 는 전달한 `props`를 라이브러리에서 사용할 수 있는 형태로 DOM data에 등룍시켜주는 것.
  - `provided.innderRef` 는 라이브러리에서 컴포넌트 DOM을 조작하기 위해 필수로 등록해야 하는 것.

- `snapshot`
  - `snapshot.isDragging`는 스타일을 추가할 때 사용한다 (드래그 되었을 때).

<br>

- `DragDropContext`에 나오는 이벤트의 작동방식.
- 드래그를 할 때, 아래와 같은 Object를 반환한다.

```json
{
  "draggableId": "1709783349811",
  "type": "DEFAULT",
  "source": {
    "index": 0,
    "droppableId": "todo"
  },
  "reason": "DROP",
  "mode": "FLUID",
  "destination": {
    "droppableId": "todo",
    "index": 1
  },
  "combine": null
}
```

- `source`와 `destination`를 주못해보자.
- `source`는 현재 드래그한 list의 원래 위치, `destination`은 아마 옮겨진 위치를 나타내는 것 같다.
- 이를 활용해서 Object의 내용을 바꿔 실제로 위치가 바뀌게 만들 수 있다.

```js
const handleEnd = (result) => {
  console.log(result) // 어떤 Object를 뱉는 지 확인하는 용도.
  if (!result.destination) return // 잘못된 곳에 드래그&드롭하면 null을 반환한다.

  const newTodoData = todoData // 불변성을 위함.

  const [reorderedItem] = newTodoData.splice(result.source.index, 1)

  newTodoData.splice(result.destination.index, 0, reorderedItem)
  setTodoData(newTodoData)
}
```

- `splice`를 이용해 기존(`source`)의 위치의 데이터를 제거한다. (`newTodoData.splice(result.source.index, 1)`)

- 그런 다음 새로운(`destination`)의 위치에 적용한다. (`newTodoData.splice(result.destination.index, 0, reorderedItem)`)

<br><br>

> 전체코드

```js
import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export default function List({ todoData, setTodoData }) {
  // --- 생략 ---

  const handleEnd = (result) => {
    console.log(result)
    if (!result.destination) return

    const newTodoData = todoData

    const [reorderedItem] = newTodoData.splice(result.source.index, 1)

    newTodoData.splice(result.destination.index, 0, reorderedItem)
    setTodoData(newTodoData)
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      key={data.id}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      className={`${snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'} 
                      flex items-center justify-between 
                      w-full px-4 py-1 my-2 text-gray-600  
                      border rounded`}
                    >
                      <div className="items-center">
                        <input
                          type="checkbox"
                          defaultChecked={false}
                          onClick={() => handleCompletChange(data.id)}
                        />
                        <span
                          className={
                            data.completed ? 'line-through' : undefined
                          }
                        >
                          {' ' + data.title}
                        </span>
                      </div>
                      <div className="items-center">
                        <button
                          className="px-4 py-2 float-right"
                          onClick={() => handleClick(data.id)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
```
