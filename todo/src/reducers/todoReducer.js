export const initialTodo = [
{
    task: 'Finish the project',
    id: 123,
    completed: false
},
{
    task: 'Go thru TK',
    id: 124,
    completed: false
},
{
    task: 'Finish the other project',
    id: 125,
    completed: false
},
{
    task: 'Revise the topics',
    id: 126,
    completed: false
},
{
    task: 'Sleep enough',
    id: 127,
    completed: false
}
];

export const reducer = (state, action) => {
    //console.log('reducer called: ' + action);
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                action.payload,
            ];
        case 'TOGGLE_TASK':
            return (state.map(x => {
                if(x.id === action.payload.id) {
                    return {
                        ...x, 
                        completed: !x.completed
                    } 
                } else {
                    return {
                        ...x
                    }
                }
            }))
        case 'CLEAR_COMPLETED':
            return (state.filter(x => !x.completed))  
        default:
            return state;
    }
}