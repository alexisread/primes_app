import assert from 'assert';
import multiplyInto2dArray from 'app/libs/multiplyInto2dArray.js';

describe('multiplyInto2dArray', () => {
  it('checks that [1,2,3] gives [1,2,3]*[1,2,3]', () => {
    const arr = [1,2,3];
    
	const result = multiplyInto2dArray(arr);

    assert.equal(result[2][2], 9);
  });
   
});