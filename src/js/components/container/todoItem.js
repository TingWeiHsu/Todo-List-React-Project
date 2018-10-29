import React from "react";

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <div>
                <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>remove</button>
                <input type="checkbox" /><label>{this.props.todo.text}</label>
            </div>
        )
    }
}