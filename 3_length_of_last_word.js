// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal

// consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

 

// Constraints:

//     1 <= s.length <= 104
//     s consists of only English letters and spaces ' '.
//     There will be at least one word in s.
/**
 * @param {string} s
 * @return {number}
 */
//Parameters We are given a string consisting of words and spaces - will a string ever be empty?

//R: We are returning the length of the last word in a sentence

//E: For example, if we have a sentence of "we have a sentence" we want to return 8, because sentence is the last word, and it has a length of 8
let s = "   fly me   to   the moon  "
var lengthOfLastWord = function(s) {
    //P: First we want to break the sentence into an array
    //Target the last word in that array
    //Determine if the last "word" in the array is an empty space
    //continue backwards in the array until you find an element that isn't an empty space
    //Return the length of that word
    let sArray = s.split(' ')
    for(let i = sArray.length -1; i>=0;i--){
        if (sArray[i]!==""){
            return sArray[i].length
        }
    }
};

console.log(lengthOfLastWord(s))
let str = 'This is a string'
console.log(str.indexOf('is'))