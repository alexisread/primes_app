import assert from 'assert';
import create2dArray from 'app/libs/create2dArray.js';

describe('create2dArray', () => {
  it('checks for a 3*3 array', () => {
    const num = 3;
	const testVal = 10;
    
	const result = create2dArray(num);
	result[num -1][num -1] = testVal; // the array is zero-based
	
    assert.equal(result[num -1][num -1], testVal);
  });
});