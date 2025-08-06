// PART ONE 
// Starting string
let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\nBob,Fry Cook,19\nG3,Blaine,Quiz Master,50\n98,Bill,Doctor's Assistant,26";

// Initialize an empty array to store the cells of each row
let row = [];
let cell = "";

// Loop through the string
for (let i = 0; i < csvStr.length; i++) {
// check if character has comma
    if (csvStr[i] === ",") {
        // Push the cell array when a comma is found
        row.push(cell); 
        cell = ""; // start storing the next value
    }
    // Check if the current character is a newline
    else if (csvStr[i] === "\n") {
        row.push(cell);
        console.log(row); // Print the row
        row = []; // Clear the row for the next line
        cell = ""; // Clear the current cell for the next line
    } else {
        // For every other character, keep adding it to the current cell
        cell += csvStr[i];
    }
}

// At the end of the loop, print the last row 
if (cell.length > 0) {
    row.push(cell);
    console.log(row);
}
