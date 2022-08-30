function main(value: string[]): string {
  let res = '';
  for (const iterator of value[0]) {
    const element = `${res}${iterator}`;
    if (value.every(v => v.startsWith(element))) {
      res = element;
    } else {
      break;
    }
  }
  return res;
}

function test() {
  // const res = main(['flower', 'flow', 'flight']);
  const res = main(['flower', 'flower', 'flower', 'flower']);
  console.log(res);
}

export default test;
