import create2dArray from './create2dArray.js';

export default function multiplyInto2dArray(arr) {
  var d2Array = create2dArray(arr.length);
  
  for(var i=0; i<arr.length; i++) {
	for(var j=0; j<arr.length; j++) {
		d2Array[i][j] = arr[i] * arr[j];
	}
  }
  
  return d2Array;
}
