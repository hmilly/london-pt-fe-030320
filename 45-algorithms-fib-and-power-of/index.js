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

let generateFibonacci = (len) => {
    let arr = [0, 1];
    for (let i = 2; i < len; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return len <= 1 ? [0] : arr
}

console.log(generateFibonacci(7));





let isPowerOf = (num, prime) => {
    return Math.pow(prime, prime) === num
}





