import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createTodo = (Todo) => {
  const li = document.createElement("li");
  li.innerText = Todo;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const Todo = input.value;
  createTodo(Todo);
  input.value = "";
};

form.addEventListener("submit", onSubmit);

const reducer = (state = [], action) => {};

const store = createStore();
