function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  let max: number = 0;
  let i = 0;
  let j = 0;
  while (j < s.length) {
    const rightCurrentStr = s.charAt(j);
    const existIndex = s.indexOf(rightCurrentStr, i);
    // 存在重复的变量且在ij之间
    if (j !== 0 && existIndex >= i && existIndex < j) {
      i = existIndex + 1;
    } else {
      j++;
    }
    const validStr = s.slice(i, j);
    max = Math.max(max, validStr.length);
  }
  return max;
}

function test() {
  const res = lengthOfLongestSubstring('abcabcbb');
  console.log(res);
}

export default test;
