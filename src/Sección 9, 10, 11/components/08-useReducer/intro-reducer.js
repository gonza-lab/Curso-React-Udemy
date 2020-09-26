const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
];

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
};

function todoReducerr(state = initialState, action) {
  if (action?.type === 'agregar') {
    return [...state, action.payload];
  }

  return state;
}

let todos = todoReducer();

const action = {
  type: 'agregar',
  payload: newTodo,
};

todos = todoReducer(todos, action);

console.log(todos);
