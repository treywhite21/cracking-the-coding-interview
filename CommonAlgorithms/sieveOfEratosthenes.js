const findPrimes = n => {
	const sieve = new Array(n).fill(true);

	for (let i = 2; i < Math.sqrt(n); i++) {
		// If sieve[i] has not been marked composite
		if (sieve[i]) {
			// Loop through all multiples of i marking composite
			for (let j = i ** 2; j < n; j += i) {
				sieve[j] = false;
			}
		}
	}

	return sieve.reduce((primes, isPrime, idx) => {
		if (isPrime && idx > 1) {
			primes.push(idx);
		}

		return primes;
	}, []);
}

console.log(findPrimes(100));
console.log(findPrimes(10));
console.log(findPrimes(25));