/**
 * Created by Ivan_Chervenkov on 7/7/2016.
 */
const toggleTodo = (todo) => {
    "use strict";
    return Object.assign({}, todo, {
        completed: !todo.completed
    });
};

const testToogleTodo = () => {
    "use strict";
    const todoBefore = {
        id: 0,
        text: 'Some text',
        completed: true
    };

     const todoAfter = {
         id: 0,
         text: 'Some text',
         completed: false
     };

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter);
};

testToogleTodo();