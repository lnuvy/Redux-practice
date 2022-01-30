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
      return [...state, { text: action.text, id: Date.now() }];
    case DLELTE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
  });
};

store.subscribe(paintTodos);

const addTodo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const onSubmit = (e) => {
  e.preventDefault();
  const Todo = input.value;
  input.value = "";
  addTodo(Todo);
};

form.addEventListener("submit", onSubmit);
