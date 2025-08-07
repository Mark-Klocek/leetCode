// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

//     For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

//P We are given a non negative integer

//R: we are returning the floor of the square root of said integer

//E: so if we do 8, we want to return 2 since sqrt(8) = 2.82842
var mySqrt = function(x) {
    //P: We want to do a while loop starting at 0
    //Each while loop will check to see if integer i * i < x
    //If i * i > x, that means we have gone past what the sqrt of x would be 
    //that means i is the floor of the sqrt of x
    let i = 0
    while (i*i <= x){
        i+= 1
    }
    return i -1
};