import React, {Component} from "react";
import Task from "./Task";

class List extends Component {
    constructor(props){
        super(props);
        this.state= {
            

        };
    }

    
    
    
    render(){
        let tab = this.props.tab;
        return(
            <div className="List">
                
                {this.props.todos.map((todo, index) => { //切換到state之後 函式傳了裡面兩個參數進去
                    if(tab == 1 && todo.done==false){
                        return(
                            <Task 
                                key={index}
                                index={index}
                                handleClickRemove={this.props.handleClickRemove}
                                handleClick={this.props.handleClick}
                                todo={todo} 
                            />
                        );
                    } else if (tab == 0 && todo.done==true){
                        return(
                            <Task 
                                key={index}
                                index={index}
                                handleClickRemove={this.props.handleClickRemove}
                                handleClick={this.props.handleClick}
                                todo={todo} 
                            />
                        );
                    } else if (tab == -1){
                        return(
                            <Task 
                                key={index}
                                index={index}
                                handleClickRemove={this.props.handleClickRemove}
                                handleClick={this.props.handleClick}
                                todo={todo} 
                            />
                        );
                    }
                })}
            </div>
        );
    }
}

export default List;