import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
// import TodoItem from "./todoItem";


// import TodoInput from "./todoInput.js";
// import TodoItem from "./todoItem";

// class HelloWorld extends Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             todos: [
//                 {id: 0, text: "make dinner"},
//                 {id: 1, text: "do the laundry"},
//                 {id: 2, text: "watch tv"}
//             ],
//             nextId: 3
//         }

//         this.addTodo = this.addTodo.bind(this);
//         this.removeTodo = this.removeTodo.bind(this);
//     }

//     addTodo(todoText) {
//         let todos = this.state.todos.slice();
//         todos.push({id: this.state.nextId, text: todoText});
//         this.setState({
//             todos: todos,
//             nextId: ++this.state.nextId
//         });
//     }

//     removeTodo(id) {
//         this.setState({
//             todos: this.state.todos.filter((todo,index) => todo.id != id)
//         });
//     }

//     render(){
//         return <div> 
//             <TodoInput todoText="" addTodo={this.addTodo}/>
//             <ul>
//                 {
//                     this.state.todos.map((todo) => {
//                         return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
//                     })
//                 }
//             </ul>

//         </div>;
//     }
// }
// export default HelloWorld;


// class TodoApp extends React.Component{
//     constructor(props){
//         super(props);
//         this.state= {
//             things:"",
//             todo:[
//                 {
//                     key: 0,
//                     content:"eat dinner",
//                     status:true
//                 },
//                 {
//                     key: 1,
//                     content:"sleep",
//                     status:false
//                 }

//             ]
//         };

//     }

    
//     render() {
//         // let TodoItems=[];
//         // for (let i=0; i<this.state.todo.length; i++){
//         //     TodoItems.push(TodoItem[i]);
//         // }
        
//         return <div><h1> Todo List </h1>
//             <input type="text" value={this.state.things} onChange={this.handleThings.bind(this)} />
           

//             <TodoItem key={this.state.todo[0].key} content={this.state.todo[0].content} status={this.state.todo[0].status}/>
//             <TodoItem key={this.state.todo[1].key} content={this.state.todo[1].content} status={this.state.todo[1].status} />

 
//         </div>;
//     }
//     handleThings(e){
//         this.setState({things:e.currentTarget.value});
//     }
// }

// class TodoItem extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return <div><input type="checkbox" checked={this.props.status} onChange={this.handleStatus.bind(this)} /><div key={this.props.key}> {this.props.content} </div></div>
//     }
//     handleStatus(e){
//         this.props.status
//     }
// }



class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todo:"eat lunch",
            input:"",
            itemArr:[
                {text:""},
                {text:"o"}
            ],
        };
    }
    render() {
        // let ListArr =[];
        // let ListItem;
        // for (let i = 0; i < 5; i++) {
        //     ListItem=React.createElement("li", null, this.state.list);
        //     ListArr.push(ListItem);
        //     console.log(ListArr);
        // }

        return <div>
            <form onSubmit={this.submitHandler.bind(this)} >
                <h1>What do you need to do today?</h1>
                <input type="text" value={this.state.input} onChange={this.handleListChange.bind(this)} />
                <input type="submit" value="Submit"/>
            </form>
            <ul>
                <li>{this.state.todo}</li>
                <li>{this.state.input}</li>
                <li>{this.state.itemArr[1].text}</li>
            </ul>
        </div>;
    }
    // changeArr(e){
    //     e.preventDefault();
    //     let newArray= this.state.itemArr.slice();
    //     newArray.push(this.state.input);
    //     this.setState({itemArr:newArray});
    // }
    handleListChange(e){
        this.setState({input:e.currentTarget.value});
    }
    submitHandler(e){
        e.preventDefault();
        this.setState({todo:this.state.input});
    }
}

// class ListItem extends React.Component {
//     constructor(props){
//         super(props);
//     }


//     render(){
//         for (let i=0; )
//         return <li> {this.props.itemArr[i].text} </li>;
//     }
// }







// const wrapper = document.getElementById("create-article-form");
//wrapper ? 
ReactDOM.render(<TodoApp />, document.body) ;
// : false;
