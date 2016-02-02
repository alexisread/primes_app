import lodash from 'lodash';
import assert from 'assert';
import genNPrimes from 'app/libs/genNPrimes.js';

describe('genNPrimes', () => {
  it('checks that n=3 gives [1,2,3]', () => {
    const num = 3;
    
	const result = genNPrimes(num);

    assert.equal(_.isEqual(result, [1,2,3]), true);
  });
   
});