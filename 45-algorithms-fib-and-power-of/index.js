/**
 * Exercise 1
 *
 * create a function {generateFibonacci} which will take a parameter
 * that represents a length of an array that needs to be generated
 * 
 * The array must be a Fibonacci sequence:
 * 
 * The next number is found by adding up the two numbers before it, 
 * always starting with 0 and 1.
 *
 * Ex: generateFibonacci(5) // return [0, 1, 1, 2, 3];
 */

<<<<<<< HEAD

/**
 * Exercise 2
 *
 * create a function {isPowerOf} which takes 2 arguments:
 * 
 * number – a number
 * primeNumber – a number (a prime number)
 * 
 * return a Boolean if your number is a power of primeNumber
 *
 * Ex: isPowerOf(27, 3) // return true;
 */
=======
let generateFibonacci = (len) => {
    let arr = [0, 1];
    for (let i = 2; i < len; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return len <= 1 ? [0] : arr
}

console.log(generateFibonacci(7));


// generate power of prime and  number


let isPowerOf = (num, prime) => {
    return Math.pow(prime, prime) === num
}




>>>>>>> 11356319418ea0d56720be8b1335ba54c1fe8b48

