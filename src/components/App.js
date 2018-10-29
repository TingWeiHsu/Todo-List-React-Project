import React from "react";
import "./style.css";

import Form from "./Form";
import List from "./List";

class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue:"",
            todos:[
                {value:"吃飯", done:false},
                {value:"睡覺", done:true},
                {value:"打東東", done:false}
            ],
            tab: -1
        };
    }

    handleChange(e){
        this.setState({inputValue: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            value: this.state.inputValue,
            done: false
        };
        const todos = this.state.todos;
        todos.push(newTodo);
        this.setState({ todos: todos , inputValue:"" });
    }

    handleClick (index)  {
        const todos = this.state.todos;
        todos[index].done = ! todos[index].done;
        this.setState({todos});
    }
    handleClickRemove (index)  {
        const todos = this.state.todos;
 
        todos.splice(index,1);
        // todos.slice(todos[index]); 
        this.setState({todos: todos});
    }

    tabAll(e) {
        this.setState({tab:-1});
    }

    tabDone(e) {
        this.setState({tab:0});
    }

    tabUndo(e) {
        this.setState({tab:1});
    }


    render() {
        return<div className="App">
            <h1>What do you need to do today?</h1>
            <Form 
                handleSubmit={this.handleSubmit.bind(this)}
                handleChange={this.handleChange.bind(this)}
                inputValue={this.state.inputValue}
                tabAll={this.tabAll.bind(this)}
                tabDone={this.tabDone.bind(this)}
                tabUndo={this.tabUndo.bind(this)}
            />
            
            <List 
                tab={this.state.tab}
                handleClick={this.handleClick.bind(this)}
                handleClickRemove={this.handleClickRemove.bind(this)}
                todos={this.state.todos}
            />
        </div>;
    }
    
    
}

export default TodoApp;






