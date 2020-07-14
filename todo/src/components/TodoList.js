import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    //console.log('props: ' + JSON.stringify(props))

    

    return (
        <div className='list'>
            {props.errands.map(x => 
                <Todo key={x.id} thing={x} toggleErrand={props.toggleTask} />
            )}
            {/* <button className="clear-btn" onClick={props.clearCompleted}>
                Completed
          </button> */}
        </div>
    )
}

export default TodoList;