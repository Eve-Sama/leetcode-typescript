function compareVersion(version1: string, version2: string): number {
  let position1 = 0;
  let position2 = 0;
  let compareCount = 0;
  let version1SplitNum = 0;
  let version2SplitNum = 0;
  for (const iterator of version1) {
    if (iterator === '.') {
      version1SplitNum++;
    }
  }
  for (const iterator of version2) {
    if (iterator === '.') {
      version2SplitNum++;
    }
  }
  const maxSplit = Math.max(version1SplitNum, version2SplitNum) + 1;
  let res: number;
  while (compareCount < maxSplit) {
    let text1 = '';
    let text2 = '';
    if (position1 < version1.length) {
      const { text, position } = getShortVersion(version1, position1);
      text1 = text;
      position1 = position + 1;
    } else {
      text1 = '0';
    }
    if (position2 < version2.length) {
      const { text, position } = getShortVersion(version2, position2);
      text2 = text;
      position2 = position + 1;
    } else {
      text2 = '0';
    }
    res = compareNumber(parseInt(text1, 10), parseInt(text2, 10));
    compareCount++;
    if (res !== 0) {
      return res;
    }
  }
  return res;
}

function getShortVersion(version: string, start: number): { text: string; position: number } {
  let position = start;
  let text = '';
  while (position < version.length) {
    const curStr = version.charAt(position);
    if (curStr === '.') {
      return { text, position };
    }
    text = `${text}${curStr}`;
    position++;
  }
  return { text, position };
}

function compareNumber(version1: number, version2: number): number {
  if (version1 > version2) {
    return 1;
  }
  if (version1 < version2) {
    return -1;
  }
  return 0;
}

function test() {
  const res = compareVersion('7.5.2.4', '7.5.3');
  // const res = compareVersion('0.1', '1.1');
  // const res = compareVersion('1.01', '1.001');
  console.log(res);
}

export default test;
