function findKthLargest(nums: number[], k: number): number {
  const sortList = sortArray(nums);
  const res = sortList[k - 1];
  return res;
}

function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }
  const pivotIndex = Math.floor(nums.length / 2);
  const pivotValue = nums[pivotIndex];
  const leftList: number[] = [];
  const rightList: number[] = [];
  const sameList: number[] = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element > pivotValue) {
      leftList.push(element);
    } else if (element < pivotValue) {
      rightList.push(element);
    } else {
      sameList.push(element);
    }
  }
  return sortArray(leftList).concat(sameList, sortArray(rightList));
}

function test() {
  const res = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
  // const res = findKthLargest([3, 1, 2, 4], 2);
  // const res = findKthLargest([2, 1], 1);
  // const res = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
  // const res = findKthLargest([3, 2, 1, 5, 6, 4], 2);
  console.log(res);
}

export default test;
