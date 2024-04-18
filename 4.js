

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1+side2+side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s*(s-side1)*(s-side2)*(s-side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);




// Define an array of numbers
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop through the array using a for of loop
for (let element of array) {
  // Check if the current element is even
  if (element % 2 == 0) {
    // Print the even element
    console.log(element);
  }
}

