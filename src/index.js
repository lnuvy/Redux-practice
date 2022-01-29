import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = () => {
  return "hello";
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
