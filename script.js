let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let body = document.querySelector("body");
let image = document.querySelector(".img");
let header = document.getElementById("header");

one.onclick = () => {
  body.style.backgroundColor = "rgba(201, 195, 24, 0.853)";
  header.style.backgroundColor = "rgba(201, 195, 24, 0.853)";
  image.src = "./images/0.png";
};

two.onclick = () => {
  body.style.backgroundColor = "rgb(20, 126, 175)";
  header.style.backgroundColor = "rgb(20, 126, 175)";
  image.src = "./images/1.png";
};

three.onclick = () => {
  body.style.backgroundColor = "black";
  header.style.backgroundColor = "black";
  image.src = "./images/2.png";
};
four.onclick = () => {
  body.style.backgroundColor = "rgba(232, 232, 232, 0.853)";
  header.style.backgroundColor = "rgba(201, 201, 201, 0.853)";
  image.src = "./images/3.png";
};
five.onclick = () => {
  body.style.backgroundColor = "rgba(147, 71, 71, 0.853)";
  header.style.backgroundColor = "rgba(147, 71, 71, 0.853)";
  image.src = "./images/4.png";
};
