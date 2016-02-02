Demo to show an n*n table of prime numbers.
Requirements: Node (4.2.6 or later installer with npm)
Preview:	install the components - npm install
		preview the app - npm start
		test the app - npm test
The input field takes a number n, and outputs an n*n table of prime numbers.



The application consists of a webpage, with input field (numeric) and a calculate button.
Component: input with button.
Test: input exists, default value is 3, button exists, button submits the value n to a callback

The button calls the algorithm that takes the input (n) and calculates the n*n table.
Algorithm: generate n prime numbers in an array, cross multiply the array into a 2d array.
Components:

GenNPrimes(int n)
integerToTest=1
for(i=1 to n){
	while (isPrime(integerToTest)=false){
		integerToTest++
	}
	addToArray(integerToTest)
}

This algorithm is O(n) on the number of integers n, and O(n) on the number of integers to test for primes.



MultiplyInto2dArray(array a)
var 2dArray = Create2dArray(a.length)
for(i=1 to a.length) {
	for(j=1 to a.length) {
		d2Array[i][j] = a[i] * a[j]
	}
}

This algorithm is O(n^2) on the array length.



isPrime(n)
   // If n is less than 2 or not an integer then by definition cannot be prime.
   if (n < 2) {return false}
   if (n != Math.round(n)) {return false}

   // Now assume that n is prime, we will try to prove that it is not.
   var isPrime = true;

   // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   }

   // Finally return whether n is prime or not.
   return isPrime;
}

This algorithm is O(sqrt(n)) on the (integer) n.



Create2dArray(rows)
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

Note that the number of columns is not important as it is not required to specify the size of an array before using it.



The n*n table is output to an html table on the page.
Component: html table generated given a 2darray.
Test: component exists, component renders mocked table correctly.