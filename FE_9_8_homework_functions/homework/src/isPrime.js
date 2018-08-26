function isPrime(number) {
    let primeNum = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                primeNum = false;
                break;
            }
        }
        return primeNum && number > 1;
}

