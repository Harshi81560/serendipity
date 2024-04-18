function findAvg(arr){
    let sumOfElement = 0;
    let totalNumOfElement =  arr.length;

    arr.forEach(element =>{
      sumOfElement += element
    })

    return average = sumOfElement/totalNumOfElement
}

console.log('Average:', findAvg([100,80,150,110,200]))






// Define an array of numbers
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop through the array using a for loop
for (let i = 0; i < array.length; i++) {
  // Check if the current element is even
  if (array[i] % 2 == 0) {
    // Print the even element
    console.log(array[i]);
  }
}
