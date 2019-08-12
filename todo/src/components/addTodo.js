import React, {
    Component
} from 'react';
class addTodo extends Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        }
        this.onSend = this.onSend.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSend(e) {
        e.preventDefault();
        if (this.state.todo !== "") {
            const newTodo = {
                id: Math.random(),
                name: this.state.todo
            };
            //@check if todo name is available
            const check = this.props.check.find(todos => todos.name === newTodo.name);
            if (!check) {
                this.props.newName(newTodo);
            } else {
                alert(`sorry ${check.name} is already added.`);
            }

        } else {
            alert("enter your todo");
        }
        this.setState({
            todo: ''
        });
    }
    render() {
        return ( <
            div className = "todo" >
            <form onSubmit = {
                this.onSend
            } >
            <
            div className = "form-group" >
            <
            input type = "text"
            name = "todo"
            className = "form-input"
            value = {
                this.state.todo
            }
            placeholder = "Add your task here"
            onChange = {
                this.onChange
            }
            /> </div > <button type = "submit"className = "btn" > Add </button> </form > </div>
        )
    }
}

export default addTodo;
