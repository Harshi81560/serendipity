


function isDivisibleBy5(str) 
{ 
	n = str.length; 
	
	return (((str[n - 1] - '0') == 0) || 
			((str[n - 1] - '0') == 5)); 
} 
	
// Driver Code 
var str = "455"; 
var x = isDivisibleBy5(str) ? "Yes" : "No"; 

document.write(x); 




