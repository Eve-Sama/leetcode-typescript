function generateParenthesis(n: number): string[] {
  const resultList: string[] = [];
  const left = 0;
  const right = 0;
  const str = '';
  backTracking(n, resultList, left, right, str);
  return resultList;
}

function backTracking(n: number, resultList: string[], left: number, right: number, str: string): void {
  // 终止条件
  if (right > left) {
    return;
  }
  if (left === n && right === n) {
    resultList.push(str);
    return;
  }
  // 循环条件
  if (left < n) {
    backTracking(n, resultList, left + 1, right, str + '(');
  }
  if (right < left) {
    backTracking(n, resultList, left, right + 1, str + ')');
  }
}

function test() {
  const res = generateParenthesis(3);
  console.log(res);
}

export default test;
