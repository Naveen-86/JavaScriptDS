let number = 25;
const tempNumber = number;
let primeFactors = [];
let isPrime = true;

for (let n = 2; n <= number; n++) {
  for (let i = 2; i <= i * i; i++) {
    if (n % i == 0) {
      isPrime = false;
    }

    if (isPrime) {
      if (number % n == 0) {
        number = number / n;
        primeFactors.push(n);
        n = 1;
      }
    }
    isPrime = true;
  }
}
console.log(...primeFactors);