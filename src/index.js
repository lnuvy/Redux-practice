const add = document.getElementById("add");
const minus = document.getElementById("minus");

const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const handleAdd = () => {
  count = count + 1;
};

const handleMinus = () => {
  count += 1;
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
