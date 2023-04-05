function removeLastNumbers(nums) {
  const numsWithoutLastElement = nums.slice(0, nums.length - 1);
  return numsWithoutLastElement;
}

module.exports = removeLastNumbers;
