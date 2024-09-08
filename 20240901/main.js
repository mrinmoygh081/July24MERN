const express = require("express");
const app = express();

console.log("1");
console.log("2");

setTimeout(() => console.log("3"), 0);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log("4"));

console.log("5");

app.listen(4000, () => console.log("Server listening on 4000"));
