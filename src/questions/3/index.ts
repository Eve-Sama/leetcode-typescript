function lengthOfLongestSubstring(s: string): number {
  const list = s.split('');
  let maxLengthList: string[] = [];
  let maxLengthValue = 0;
  list.forEach(str => {
    const existIndex = maxLengthList.findIndex(v => v === str);
    // 存在元素
    if (existIndex !== -1) {
      const tempStrList: string[] = [];
      for (let index = existIndex + 1; index < maxLengthList.length; index++) {
        const element = maxLengthList[index];
        tempStrList.push(element);
      }
      maxLengthList = [...tempStrList, str];
      maxLengthValue = maxLengthValue > tempStrList.length ? maxLengthValue : tempStrList.length;
    } else {
      // 不存在元素
      maxLengthList.push(str);
      maxLengthValue = maxLengthValue > maxLengthList.length ? maxLengthValue : maxLengthList.length;
    }
  });
  return maxLengthValue;
}

function test() {
  const res = lengthOfLongestSubstring('abcabcbb');
  console.log(res);
}

export default test;
