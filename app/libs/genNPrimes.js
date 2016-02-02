import isPrime from './isPrime.js';

export default function genNPrimes(n) {
  var integerToTest=1;
  var arr = [];
  
  for(var i=0; i<n; i++){
	while (isPrime(integerToTest)==false){
		integerToTest++;
	}
	arr.push(integerToTest);
	integerToTest++;
  }
  
  return arr;
}
