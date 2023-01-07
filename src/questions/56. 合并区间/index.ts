function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const resList: number[][] = [intervals[0]];
  if (intervals.length === 1) {
    return resList;
  }
  for (let index = 1; index < intervals.length; index++) {
    const element = intervals[index];
    const [start, end] = element;
    const lastElement = resList[resList.length - 1];
    if (start <= lastElement[1]) {
      resList.pop();
      if (end < lastElement[1]) {
        resList.push(lastElement);
      } else {
        resList.push([lastElement[0], end]);
      }
    } else {
      resList.push(element);
    }
  }
  return resList;
}

function test() {
  const res = merge([
    [1, 4],
    [2, 3],
  ]);
  console.log(res);
}

export default test;
