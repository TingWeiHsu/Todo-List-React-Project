import React, {Component} from "react";

class Form extends Component {
    constructor(props){
        super(props);
        this.state= {

        };
    }
    

    render(){
        return(
            <div className="Form">
                <button onClick={this.props.tabAll}>All</button>
                <button onClick={this.props.tabDone}>Done</button>
                <button onClick={this.props.tabUndo}>Undone</button>
                <form onSubmit={this.props.handleSubmit}>
                    <input 
                        onChange={this.props.handleChange}
                        value={this.props.inputValue}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;