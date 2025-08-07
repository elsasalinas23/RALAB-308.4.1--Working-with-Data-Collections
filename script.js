
// PART ONE/ TWO
// =======================

// Starting CSV string
let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n6,Bill,Doctor's Assistant";

// Create a big array to hold all the rows
let allRows = []; // This will become a 2D array

// Temporary holders for each row
let row = [];
let cell = "";

// Go through each character in the string
for (let i = 0; i < csvStr.length; i++) {
    if (csvStr[i] === ",") {
        row.push(cell); // Push the cell to the row
        cell = "";      // Start a new cell
    } else if (csvStr[i] === "\n") {
        row.push(cell);    // End of line, push last cell
        allRows.push(row); // Push the row into allRows
        row = [];          // Reset row for next line
        cell = "";         // Reset cell
    } else {
        cell += csvStr[i]; // Keep adding letters to cell
    }
}

// Handle the last row (if it didn't end with \n)
if (cell.length > 0) {
    row.push(cell);
    allRows.push(row);
}

// See what the 2D array looks like
console.log(allRows);




// PART Three
// =======================

// Step 1: Create a new array to hold objects
let allObjects = [];

// Step 2: Use the first row (column titles) as keys
let headers = allRows[0];

// Step 3: Convert headers to lowercase
for (let i = 0; i < headers.length; i++) {
    headers[i] = headers[i].toLowerCase(); // "ID" → "id"
}

// Step 4: Turn each row (after the first) into an object
for (let i = 1; i < allRows.length; i++) {
    let row = allRows[i];
    let obj = {};

    for (let j = 0; j < headers.length; j++) {
        let key = headers[j];  // example: "id"
        let value = row[j];    // example: "42"
        obj[key] = value;
    }

    allObjects.push(obj);
}

// Print out the array of objects
console.log(allObjects);



// PART FOUR
// =======================

// Step 1: Remove the last object
allObjects.pop(); // removes Bill

// Step 2: Insert Barry at position 1
let newPerson1 = {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25"
};
allObjects.splice(1, 0, newPerson1); // add Barry at index 1

// Step 3: Add Bilbo to the end
let newPerson2 = {
  id: "7",
  name: "Bilbo",
  occupation: "None",
  age: "111"
};
allObjects.push(newPerson2); // add Bilbo at the end

// Print the new version of the array
console.log(allObjects);



let totalAge = 0; //Calculate  Age


for (let i = 0; i < allObjects.length; i++) {
    let ageAsNumber = Number(allObjects[i].age); // convert string to number
    totalAge += ageAsNumber; // add to total
}

let averageAge = totalAge / allObjects.length;
console.log("Average Age:", averageAge);


// PART FIVE
//================

let finalCSV = "";

finalCSV += headers.join(",") + "\n";

for (let i = 0; i < allObjects.length; i++) {
    let person = allObjects[i]; // get one object at a time
    let line = person.id + "," + person.name + "," + person.occupation + "," + person.age;
    finalCSV += line + "\n"; // add this line to the CSV string
}


console.log("Final CSV Format:\n" + finalCSV);

