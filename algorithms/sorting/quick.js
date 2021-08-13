const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const arrayLenght = arr.length;
  let swapIdx = 0;

  for (let i = start + 1; i < arrayLenght; i++) {
    if (arr[start] > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, arr[start], arr[swapIdx]);

  return swapIdx;
};
