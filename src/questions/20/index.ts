function isValid(s: string): boolean {
  const map = new Map<string, string>([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);
  const array = s.split('');
  const stack: string[] = [];
  array.forEach(cur => {
    const length = stack.length;
    const last = stack[length - 1];
    if (match(last, cur)) {
      stack.pop();
    } else {
      stack.push(cur);
    }
  });
  console.log(stack, `stack`);
  return stack.length === 0;
}

function match(arg1: string, arg2: string): boolean {
  if (arg1 === '(' && arg2 === ')') {
    return true;
  } else if (arg1 === '{' && arg2 === '}') {
    return true;
  } else if (arg1 === '[' && arg2 === ']') {
    return true;
  }
  return false;
}

function test() {
  const res = isValid('()[{}]{}');
  console.log(res);
}

export default test;
