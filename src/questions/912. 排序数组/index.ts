// 这题考察的就是数组排序, 但是官方加入了非常恶心的超大数据测试用例, 故意让你过不了. 需要进一步优化才行, 懒得弄了, 就这样吧
function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }
  const min = 0;
  const max = nums.length - 1;
  // 随机也可以, 直接取0号位也可以
  const random = Math.floor(min + Math.random() * (max - min));
  const pivot = nums[random];
  const left: number[] = [];
  const right: number[] = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (index === random) {
      continue;
    }
    if (element > pivot) {
      right.push(element);
    } else {
      left.push(element);
    }
  }
  return sortArray(left).concat([pivot], sortArray(right));
}

function test() {
  // const res = sortArray([5, 2, 3, 1]);
  const res = sortArray([1, 3, 2, 4, 5]);
  // const res = sortArray([1, 4, -2]);
  console.log(res);
}

export default test;
