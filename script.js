var uniqueInOrder=function(iterable){
  let iterableArr;
  if (typeof iterable === "string"){
   iterableArr = iterable.split('')  
  } else {
    iterableArr = iterable
  }
  let checkingArr=[];
  for (let i=0;i<iterableArr.length;i++){
    if (iterableArr[i]===iterableArr[i+1]){
      console.log('ok')
    } else {
      checkingArr.push(iterableArr[i])
    }
  }
  return checkingArr
}

console.log(uniqueInOrder([1,2,2,3,3]))