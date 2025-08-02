// Array Prototype Last
// Easy
// premium lock iconCompanies
// Hint

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

 

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

 

// Constraints:

//     arr is a valid JSON array
//     0 <= arr.length <= 1000

//P: We are given an array, and we must alter the Array prototype to include a new function called last. If the array is empty, return -1

//R: We are creating a method that will return the last element in it's own array.

//E: If we have an array of [1,2,3] our Array.last method should return the number 3
Array.prototype.last = function() {
    //Psuedo
    //Determine if the array is > 1
    //if Array is greater than one, return the last element within itself.
    //if array is empty, return -1
    
};
