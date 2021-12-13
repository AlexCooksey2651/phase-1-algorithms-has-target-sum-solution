function hasTargetSum(array, target) {
  // Write your algorithm here
  // IN OWN WORDS:
  // still iterate through array with counter i, up through length-1
  // this time, instead of having separate iteration cycle, just subtract each item of array from target and see if array contains that number (use .includes())
  // THIS ATTEMPT HAD ISSUE THAT IT COULD STILL SEARCH FOR THE CURRENT ITEM OF LOOP
  // for (let i=0; i < array.length; i ++) {
  //   let searchNum = target - array[i]
  //   if (array.includes(searchNum)) {
  //     return true
  //   }
  // }
  // return false
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;
  
      // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;
  
      // .add adds the number to the Set
    seenNumbers.add(number);
    }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
// O(n) - linear. If array of n inputs, number of checks goes up proportionally.

/* 
  Add your pseudocode here
*/
// declare function, array and target numbr passed as argument
//  iterate through loop; subtract current item from target number and store as variable
//    see if array includes that number; if so, return true
//  if not, after all comparisons, return false

/*
  Add written explanation of your solution here
*/
// using includes method allows you to check for a specific number you're lookig for in the case of each loop, instead of always comparing two numbers using nested loops. 
// only thing I'm not sure - is includes() method itself having to iterate through whole array? It might have disadvantageous time complexity. Seems to have good space complexity.


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false")
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 10))

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 8))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
