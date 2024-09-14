let monParagraphe = document.getElementById('description'); //get an element by id
let titres = document.getElementsByClassName('heading'); //get multiple elements that has the same class name
let paragrapheSpecial = document.querySelector('#special'); // get element by specifiying type(# for id and . for class)
let finaltexts = document.querySelectorAll('.final'); //select elements that has the same class final

monParagraphe.style.fontSize = '50px'; //styling an element in js
monParagraphe.classList.add('text'); //adding a class in js,to remove one just replace add by remove,to toggle just put toggle instead of add

let newParagraph = document.createElement('p'); //create a new html element in js

newParagraph.setAttribute('class', 'text'); //set an attribute to it

newParagraph.textContent = 'Hello Code213!!!'; //set a text  to it

let p2 = document.createElement('p');

p2.textContent = 'Salut Code213!!!';

let salim = document.getElementById('code213');

salim.appendChild(newParagraph); //add a new child element to a parent element

salim.insertBefore(p2, salim.firstChild); //add a child but specify in what place

monParagraphe.remove(); // to remove a tag

let btn = document.getElementById('myBtn');

//add an event of click to the btn ,it will launch the function
btn.addEventListener('click', function () {
  alert('Hello Younes && Sophia!!!');
});

function Clicked() {
  alert('Hello Younes && Sophia && Salim!!!');
}
