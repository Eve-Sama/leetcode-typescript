function lengthOfLastWord(s: string): number {
  const arr = s.split(' ');
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    if (element.trim().length > 0) {
      return element.length;
    }
  }
  return 1;
}

function test() {
  // const res = lengthOfLastWord('Hello World');
  const res = lengthOfLastWord('   fly me   to   the moon  ');
  console.log(res);
}

export default test;
