import React, {Component} from "react";


class Task extends Component {
    constructor(props){
        super(props);
        this.state= {

        };
    }

    render(){
        return(
            <div className="Task">
                <button onClick={()=>this.props.handleClickRemove(this.props.index)}>X</button>
                <button onClick={()=>this.props.handleClick(this.props.index)}>{this.props.todo.done ? "Undo" : "Done"}</button>
                <span style={{ textDecoration: this.props.todo.done ? "line-through" : "none" }}> 
                    {this.props.todo.value}
                </span>
            </div>
        );
    }
}

export default Task;