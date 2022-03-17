function myFilter(array, callbackFunc) {
  const filterArray = [];

  for (let i = 0; i < array.length; i++) {
    const result = callbackFunc(array[i], i, array);

    if(result) {
      filterArray.push(array[i]);
    }
  }

  return filterArray;
}

function myReduce(array, callbackFunc, initialValue = 0) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callbackFunc(accumulator, array[i], i, array);
  }

  return accumulator;
}