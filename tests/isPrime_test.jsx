import assert from 'assert';
import isPrime from 'app/libs/isPrime.js';

describe('isPrime', () => {
  it('checks 3 is a prime', () => {
    const num = 3;
    
	const result = isPrime(num);

    assert.equal(result, true);
  });
  
  it('checks 4 is not a prime', () => {
    const num = 4;
    
	const result = isPrime(num);

    assert.equal(result, false);
  });  
});