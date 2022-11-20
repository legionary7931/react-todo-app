import React, {Component} from "react"; //React 컴포넌트 가져오기
import "./App.css"

//클래스형 컴포넌트
export default class App extends Component{

  state = {
    todoData : [],
    value: ""
  }

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }
  
  /* 
    1. listStyle (할 일 리스트의 스타일을 결정하는 메소드) 
      -> todoData 객체 안의 completed 속성을 비교하여, true면 line-through, false면 none으로 리스트 스타일 변경
  
  */
  listStyle = (completed) => {
    return{
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    };
  }

  /* 
    2. handleClick
  */

  handleClick = (id) => {
    let newTododata = this.state.todoData.filter((data) => data.id !== id);
    this.setState({todoData: newTododata});
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    // 페이지 새로고침을 막아주는 함수
    e.preventDefault();

    //추가한 새로 할 일
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    this.setState({ todoData: [...this.state.todoData, newTodo], value: ""});

    //...은 전개 연산자, 기존 todoData에 있던 모든 원소를 전개후 새로운 newTodo를 todoData의 원소로 append
  }

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map(data => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })

    this.setState({todoData: newTodoData});
  }
  
  render(){
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <form style={{display: 'flex'}} onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              name="value" 
              style={{flex:'10', padding: '5px'}}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{flex: '1'}}
            />
          </form>
      
          {this.state.todoData.map((data) => (
            <div style = {this.listStyle(data.completed)} key={data.id}>
              <input 
                type="checkbox" 
                onClick={() => this.handleCompleteChange(data.id)}
                defaultChecked={false} 
              />
              {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
            </div>
          ))}
          
        </div>
      </div>
    )
  }
}


//함수형 컴포넌트에는 render 함수를 쓰지 않는다.