let msg = 'Rooted in Faith'; 

// This code will print the message to the console
console.log(msg);

// Add 2 blank lines

// Declare a variable to store the number of times we want to print the message
let messageCount = 2000;

// Use a for loop to print the message to the console
for (let i=0; i<messageCount; i++) {
  // Print the message
  console.log(msg);
}

// Add 2 blank lines

// Create a function to print the message
function printRootedInFaithMessage() {
  console.log(msg);
}

// Call the function 2000 times, using a for loop
for (let i=0; i<messageCount; i++) {
  printRootedInFaithMessage();
}

// Add 2 blank lines

// Create an array to store 2000 copies of the message
let messageArray = [];

// Push the message to the array 2000 times
for (let i=0; i<messageCount; i++) {
  messageArray.push(msg);
}

// Print the array to the console
console.log(messageArray);

// Add 2 blank lines

// Create a while loop to call the printRootedInFaithMessage() function
let i = 0;
while (i < messageCount) {
  printRootedInFaithMessage();
  i++;
}