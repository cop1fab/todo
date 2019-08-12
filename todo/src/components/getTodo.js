import React, {
    Component
} from 'react';

class getTodo extends Component {
    render() {
        const todos = this.props.name.map((todo) => ( <
            div className = "todoList"
            key = {
                todo.id
            } > {
                todo.name
            } <div className = "delTodo" onClick = { this.props.delete.bind(this, todo.id)} > X </div> </div > ));
        return ( <div className = "todo list" > {
            todos
        } </div>)
    }
}
export default getTodo;