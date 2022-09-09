function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  let i = 0;
  while (i < nums.length - 2) {
    let j = i + 1;
    let k = nums.length - 1;
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      i++;
      continue;
    }
    while (j !== k) {
      if (nums[j] !== nums[i]) {
        while (j < nums.length - 2 && nums[j] === nums[j - 1] && j < k - 1) {
          j++;
          continue;
        }
      }
      const valueI = nums[i];
      const valueJ = nums[j];
      const valueK = nums[k];
      if (valueI + valueJ + valueK === 0) {
        const targetList = [valueI, valueJ, valueK];
        if (!exist(res, targetList)) {
          res.push(targetList);
        }
        j++;
        k = nums.length - 1;
      } else {
        if (valueI + valueJ + valueK > 0) {
          k--;
        } else {
          j++;
        }
      }
    }
    i++;
  }
  return res;
}

function exist(res: number[][], targetList: number[]): boolean {
  if (targetList.every(v => v === 0)) {
    if (res.some(v => v.every(num => num === 0))) {
      return true;
    } else {
      return false;
    }
  }
  const existValue = res.some(v => {
    const existI = v.some(item => item === targetList[0]);
    const existJ = v.some(item => item === targetList[1]);
    const existK = v.some(item => item === targetList[2]);
    return existI && existJ && existK;
  });
  return existValue;
}

function test() {
  // const res = threeSum([-1, 0, 1, 2, -1, -4]);
  const res = threeSum([-5,1,-3,-1,-4,-2,4,-1,-1]);
  // const res = threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]);
  // const res = threeSum([0,0,0]);
  // const res = threeSum([0, 0, 0, 0]);
  // const res = threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
  // const res = threeSum([34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57, -6, 86, 56, 94, 74, 83, -14, 28, -66, 46, -49, 62, -11, 43, 65, 77, 12, 47, 61, 26, 1, 13, 29, 55, -82, 76, 26, 15, -29, 36, -29, 10, -70, 69, 17, 49]);
  console.log(res);
}

export default test;
