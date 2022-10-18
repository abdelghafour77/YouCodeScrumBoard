//Selects an individual element within a document using a specific id
document.getElementById("input-title");

//Selects the first matching element within a document
document.querySelector("#input-title");

//Allows you to select all elements with a given class attribute
document.getElementsByClassName("btn-primary");

//Locates all elements that match a given tag name
document.getElementsByTagName("li");

//Selects one or more elements
document.querySelectorAll(".btn");

//Get or set the HTML content of an element
let html = document.getElementById("status").innerHTML;

document.getElementById("status").innerHTML = "I have changed!";

//Get or set the text content of an element
let text = document.getElementById("myList").textContent;

element.textContent = "I have changed!";


//Create an HTML element
document.createElement("div");

//Remove an HTML element
document.removeChild("span");

//Add an HTML element
document.appendChild("h2");

//Replace an HTML element (new ,old)
document.replaceChild("h1", "h2");

//Write into the HTML output
document.write("bla bla bla bla");



var user = {
  name: "Ahmed",
  age: 20,
  hobbies: ["football", "handball", "guitar"]
}

// console.log(User.hobbies[2]);
// console.log(User -> hobbies[3]);
// console.log(user.hobbies[3]);
// console.log(user.hobbies[2]);


