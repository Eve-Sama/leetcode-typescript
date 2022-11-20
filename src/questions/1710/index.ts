function maximumUnits(boxTypes: number[][], truckSize: number): number {
  const map = new Map<number, number[]>();
  const excludeList: number[] = [];
  let total = 0;
  boxTypes.forEach(v => {
    const [num, size] = v;
    const list = map.get(size) || [];
    list.push(num);
    map.set(size, list);
  });
  while (truckSize > 0) {
    const maxUnit = getMaxSize(map, excludeList);
    if (maxUnit === -1) {
      truckSize = 0;
      break;
    }
    excludeList.push(maxUnit);
    const numList = map.get(maxUnit);
    let count = numList.reduce((pre, cur) => pre + cur, 0);
    if (count >= truckSize) {
      total += truckSize * maxUnit;
    } else {
      total += count * maxUnit;
    }
    truckSize -= count;
  }
  return total;
}

function getMaxSize(map: Map<number, number[]>, excludeList: number[]): number {
  let maxUnit = -1;
  map.forEach((_value, key) => {
    if (excludeList.includes(key)) {
      return;
    }
    if (key > maxUnit) {
      maxUnit = key;
    }
  });
  return maxUnit;
}

function test() {
  const res = maximumUnits(
    [
      [1, 3],
      [5, 5],
      [2, 5],
      [4, 2],
      [4, 1],
      [3, 1],
      [2, 2],
      [1, 3],
      [2, 5],
      [3, 2],
    ],
    35,
  );
  // const res = maximumUnits(
  //   [
  //     [5, 10],
  //     [2, 5],
  //     [4, 7],
  //     [3, 9],
  //   ],
  //   10,
  // );
  // const res = maximumUnits(
  //   [
  //     [1, 3],
  //     [2, 2],
  //     [3, 1],
  //   ],
  //   4,
  // );
  console.log(res, `res`);
}

export default test;
