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




