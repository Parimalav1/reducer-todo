import React, { useState } from "react";

const TodoList = (props) => {
    const [newTodo, setNewtodo] = useState('');//props for new task

    const handleChanges = (evt) => {//changing form with new task
        setNewtodo(evt.target.value);
    };

    const submitTask = (evt) => {
        evt.preventDefault();
        props.addTask(newTodo);
    }

    return (
        <div>
            <h1>** Things to do **</h1>
            {/* <i
                className="far fa-edit"
                onClick={() => dispatch({ type: "toggleTask" })}
            /> */}
            <form onSubmit={submitTask}>
                <input
                    type="text"
                    value={newTodo}
                    name="newTodo"
                    onChange={handleChanges}
                />
                <button>Add</button>
                <button className="clear-btn" onClick={props.clearCompleted}>
                    Completed
                </button>
            </form>
        </div>

    )
};

export default TodoList;
