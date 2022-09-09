function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let res = false;
  const stack: number[] = [pushed[0]];
  let i = 0;
  let j = 0;
  while (i < pushed.length && j < popped.length ) {
    const stackLast = stack.at(-1);
    const popedFirst = popped[j];
    if (stackLast === popedFirst) {
      stack.pop();
      j++;
    } else {
      i++;
      stack.push(pushed[i]);
    }
  }
  if (i === j - 1) {
    res = true;
  }
  return res;
}

function test() {
  // const res = validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);
  const res = validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]);
  console.log(res);
}

export default test;
