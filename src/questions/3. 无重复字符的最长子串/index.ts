// 使用Set
function lengthOfLongestSubstring(s: string): number {
  let max: number = 0;
  const set = new Set<string>();
  for (const str of s) {
    const exist = set.has(str);
    // 当set中存在重复值时, 需要重新设置set为重复值之后一个元素开始的字符串
    if (exist) {
      const list = Array.from(set);
      set.clear();
      let startAdd = false;
      list.forEach(existStr => {
        if (startAdd) {
          set.add(existStr);
        }
        if (existStr === str) {
          startAdd = true;
        }
      });
    }
    set.add(str);
    max = max > set.size ? max : set.size;
  }
  return max;
}
// 使用数组循环字符串
// function lengthOfLongestSubstring(s: string): number {
//   const list = s.split('');
//   let maxLengthList: string[] = [];
//   let maxLengthValue = 0;
//   list.forEach(str => {
//     const existIndex = maxLengthList.findIndex(v => v === str);
//     // 存在元素
//     if (existIndex !== -1) {
//       const tempStrList: string[] = [];
//       for (let index = existIndex + 1; index < maxLengthList.length; index++) {
//         const element = maxLengthList[index];
//         tempStrList.push(element);
//       }
//       maxLengthList = [...tempStrList, str];
//       maxLengthValue = maxLengthValue > tempStrList.length ? maxLengthValue : tempStrList.length;
//     } else {
//       // 不存在元素
//       maxLengthList.push(str);
//       maxLengthValue = maxLengthValue > maxLengthList.length ? maxLengthValue : maxLengthList.length;
//     }
//   });
//   return maxLengthValue;
// }

function test() {
  const res = lengthOfLongestSubstring('dvdf');
  console.log(res);
}

export default test;
