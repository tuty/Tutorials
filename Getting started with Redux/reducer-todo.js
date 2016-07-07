/**
 * Created by Ivan_Chervenkov on 7/7/2016.
 */
const todos = (state = [], action)=> {
    "use strict";
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        /*case 'TOGGLE_TODO':
        return state.map( todo => {
            if (todo.id !== action.id) {
                return todo;
            };

            return {
                ...todo,
                completed: !todo.completed
            };
        });*/
        default:
            return state;
    };
};

const testAddTodo = () => {
    "use strict";
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn redux'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn redux',
            completed: false
        }
    ];

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

const testToggleTodo = () => {
    "use strict";
    const stateBefore = [
        {
            id: 0,
            text: 'Learn redux',
            completed: false
        },
        {
            id: 1,
            text: 'Learn redux',
            completed: true
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 0
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn redux',
            completed: true
        },
        {
            id: 1,
            text: 'Learn redux',
            completed: true
        }
    ];

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

testAddTodo();
console.log('All test pass');
