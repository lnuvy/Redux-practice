import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DLELTE_TODO = "DLELTE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text }];
    case DLELTE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

// const createTodo = (Todo) => {
//   const li = document.createElement("li");
//   li.innerText = Todo;
//   ul.appendChild(li);
// };

const onSubmit = (e) => {
  e.preventDefault();
  const Todo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: Todo });
};

form.addEventListener("submit", onSubmit);
