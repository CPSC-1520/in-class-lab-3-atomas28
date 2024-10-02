// Enter your code below.


//STEP 1
let resources = document.querySelector(".javascript-resources");
let showButton = document.querySelector("#show-resources");

showButton.addEventListener('click', function(event){
    resources.classList.remove("d-none");
});


//STEP 2

// 1. Add an event listener on element selected in the previous step that will listen to the mouseover
// event. Ensure that you’re passing in the event object to the event handler function.

// 2. Use console.log to print out the “event.target” to see the link list item elements are the
// event.target returned


// 3. On the event.target use the method “classList.add” to add the class named “fw-bold”.

// a. When you only hover over the the first link item you should see something like this.

resources.addEventListener('mouseover',function(event){
    console.log(event.target);
    event.target.classList.add("fw-bold");
})


//STEP 3
// 1. You see an issue with your application. The idea is that you only want to bold the text of the
// item you are hovering over. In the image below, all links get highlighted when you hover your
// mouse over the other items in the list. You need to fix this (probably with another event listener
// of mouseout).
// a. Image of current functionality.


// 2. Add another event listener on the div list group selected in the first step (the last section) that
// listens to mouseout events.

let listGroup = document.querySelector(".list-group");
console.log(listGroup);

listGroup.addEventListener('mouseout', function(event){
    event.target.classList.remove("fw-bold")
});

// 3. In the event handler, on the event.target use the method “classList.remove” to remove the class
// named “fw-bold.” The handler will now remove the class when you move away from an item in
// the list.
// a. When you test the third item (after hovering over the other items) it should now look
// something like this.




