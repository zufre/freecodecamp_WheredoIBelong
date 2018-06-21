function getIndexToIns(arr, num) {
  let newArr = arr.sort((a, b) => a - b);
  if (arr[0] == undefined) {
    return 0;
  }
  if (num > newArr[arr.length-1]) {
    return arr.length;
  }
  for(let i = 0; i < newArr.length; i ++) {
    if (num <= newArr[i]) {
      return i;   
    }
  }  
}

getIndexToIns([40, 60], 50);
