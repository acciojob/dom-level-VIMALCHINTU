//your JS code here. If required.
// Get the element with id "level"
const element = document.getElementById("level");

// Initialize the level counter
let level = 0;

// Traverse up through parent elements until root
let current = element;
while (current) {
    level++; // Count the current element
    current = current.parentElement; // Move to parent
}

// Display the level using alert
alert("The level of the element is: " + level);
