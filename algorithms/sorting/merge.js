const mergeSort = (dataset) => {
  const datasetLen = dataset.length;

  if (datasetLen > 1) {
    // Calculate middle index of dataset
    const halfDataset = Math.round(datasetLen / 2);

    // Get the right portion
    const rightArray = dataset.slice(0, halfDataset);
    const rightArrayLenght = rightArray.length;

    // Get the left portion
    const leftArray = dataset.slice(halfDataset, datasetLen);
    const leftArrayLength = leftArray.length;

    // Recursively split the array
    mergeSort(rightArray);
    mergeSort(leftArray);

    // Initialize indexes for the start of sorting
    let rightIndex = 0;
    let leftIndex = 0;
    let datasetIndex = 0;

    // While still values in both left and right
    // portions of the two arrays keep sorting them
    while (rightIndex < rightArrayLenght && leftIndex < leftArrayLength) {

      // If the value in the left array is less than the value in the right array
      // set the value in the left array in the new sorted dataset.
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        dataset[datasetIndex] = leftArray[leftIndex];

        leftIndex++;
      // The value of the right array is grater than the value in the left array
      // so set the right array value in the new sorted dataset.
      } else {
        dataset[datasetIndex] = rightArray[rightIndex];

        rightIndex++;
      }
      datasetIndex++;
    }

    // If still any values in one of the two arrays, set them in the dataset.
    while (rightIndex < rightArrayLenght) {
      dataset[datasetIndex] = rightArray[rightIndex];

      rightIndex++;
      datasetIndex++;
    }

    // Left portion
    while (leftIndex < leftArrayLength) {
      dataset[datasetIndex] = leftArray[leftIndex];

      leftIndex++;
      datasetIndex++;
    }
  }

  return dataset;
};
