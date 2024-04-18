
	let pi = 3.14;

	function findArea(r)
    {
		return (pi * r * r);
	}

	let r, Area;
	r = 5;
	Area = findArea(r);

	console.log("Area of Circle is: " + Area);




	// Define an array of numbers
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop through the array using a for in loop
for (let index in array) {
  // Check if the current element is even
  if (array[index] % 2 == 0) {
    // Print the even element
    console.log(array[index]);
  }
}
