const nums = [2, 4, 5, 7, 9, 3, 8];
const part = nums.slice(2, 5);
// console.log(part)

const removed = nums.splice(2,3, 11);
// console.log(removed)
// console.log(nums)

const together = nums.join(",");
console.log(together)