function maxPower(s: string): number {
  const obj = {} as any;
  let lastStr: string;
  let max = 1;
  let currentMax = 1;
  for (const current of s) {
    if (current === lastStr) {
      ++currentMax;
    } else {
      currentMax = 1;
    }
    if (currentMax > max) {
      max = currentMax;
    }
    lastStr = current;
  }
  return max;
}

function test() {
  // const res = maxPower('leetcode');
  const res = maxPower('abbcccddddeeeeedcba');
  console.log(res);
}

export default test;
