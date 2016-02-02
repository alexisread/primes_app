export default function create2dArray(rows) {
  // Note that the number of columns is not important as it is not required to specify the size of an array before using it.
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
