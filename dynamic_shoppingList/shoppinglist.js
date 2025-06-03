
/*
Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
Create a function that will run in response to the button being clicked.
Inside the function body, start off by storing the current value of the input element in a variable.
Next, empty the input element by setting its value to an empty string — ''.
Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
Append the span and the button as children of the list item.
Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
Append the list item as a child of the list.
Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
*/
const ul = document.querySelector("ul");
const item = document.querySelector("input");
const btn = document.querySelector("button");
btn.style.cssText="background-color:#f0ff0f90"

const responeToClick = () => {
    let list_item = '';
    list_item = item.value;
    if (list_item === '') {
        alert("Can't add empty element! ");
        return;
    }
    let li = document.createElement("li");
    let span = document.createElement("span");
    let d_button = document.createElement("button");
    span.textContent = list_item;
    d_button.textContent = "Delete";
    item.value = '';
    //event listener
    d_button.addEventListener("click", () => {
        ul.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(d_button);
    ul.appendChild(li); 
}

btn.addEventListener("click",responeToClick);