
// ---- DOM SELECTORS -------------
const container = document.querySelector('#container');
const display = container.firstElementChild;
console.log(display);  // display first element 

const control = document.querySelector('.controls');
const dis = control.previousElementSibling;
console.log(dis);

// // ----- DOM - METHODS -----
// //creating element and adding it to the dom
// const div = document.createElement("div", "hello")
// div.style.cssText = "color: red; font-size:23px;";
// div.style['background-color'] = red; 

// // Putting in the DOM
// container.appendChild(div);
// container.insertBefore(dis); // put it before display
// container.removeChild(div);


// // setting and attribute to the dom element
// div.setAttribute('id', 'new-id');
// div.getAttribute('id'); // retrieves the id value store on the attribute
// div.removeAttribute('id'); // removes this attribute from element

// // dealing with classes 
// div.classList.add('new-class'); // adds a new class to div
// div.classList.remove('new-class'); // removes the class from the div
// div.classList.toggle('active'); // put on or off class for the div; on if classlist is off and off otherwise
// // adding HTML 
// div.innerHTML=<h1>Hello , Welcome </h1>

/* a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

// SECTION - Exercise (DOM MANIPULATION)
const p = document.createElement("p");
p.textContent = "Hey I'm red";
p.style.color = "red";
container.appendChild(p); // appending p
//creating and adding h3
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3";
h3.style.color = 'blue';
container.appendChild(h3);
//creating and adding div  with h1 and p inside the div
const div = document.createElement('div');
div.style.cssText = "border:2px solid black; background-color:pink";
const h1 = document.createElement('h1');
const p2 = document.createElement('p');
h1.textContent = "I'm a div";
p2.textContent = "ME TOO";
div.appendChild(h1);
div.appendChild(p2);
container.appendChild(div);

// EVENT LISTENERS
const button = document.querySelector("#btn");
// button.onclick = () => alert("Hello, Baddy");

button.addEventListener("click", () => {
    alert("Halloo , man !");
});
// manipulating the event listener
button.addEventListener("click", e => {
    e.target.style.color = "red";
    console.log(e.target);
})
