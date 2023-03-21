"use-strict";

console.log("app.js is running...");

// title
const title = document.createElement("h1");
title.textContent = "DOM Fun Project :)";
console.log(title);
document.querySelector("header").appendChild(title);

// paragraph
const hello = document.createElement("p");
hello.textContent = "Hej Peter";
document.querySelector("body").appendChild(hello);
