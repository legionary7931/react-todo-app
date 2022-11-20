import React, { useState } from "react"; //React 컴포넌트 가져오기
import "./App.css"
import Form from "./components/Form";
import List from "./components/List";

//함수형 컴포넌트
export default function App(){

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  }

  return(
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
        <List todoData={todoData} setTodoData={setTodoData}/>
                
      </div>
    </div>
  )
}
