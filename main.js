//
const a = 122567782;
function findMissingNumbers(arg){
  const arrayOfNumbers = [];
  let result = [];
  while(Math.floor(arg) != 0){
    let lastNumber = arg % 10;
    arg = Math.floor(arg/10);
    arrayOfNumbers.push(lastNumber);
  }
  for(let i = 0; i <= 9; i++){
    let x = false;
    for(let j = 0; j < arrayOfNumbers.length; j++){
      if(i == arrayOfNumbers[j]){
        x = true;
      }
    }
    if(x == false){
      result.push(i);
    }
  }
  console.log(result);
}
findMissingNumbers(a);

//join()
let array = ['Paris', 'Madrid', 'Rome', 'London'];
function Join(arr, separator){
let newArr = [];
for(let i = 0; i < arr.length; i++) {
  if (i < arr.length) {
    if(separator.length == 0){
      newArr += arr[i];
    }
    if(separator == " " && i !== arr.length -1){
      newArr += arr[i] + ' '
    }else if(separator == " " && i == arr.length -1){
      newArr += arr[i]
    }
    
    if(separator === undefined && i !== arr.length -1){
      newArr += arr[i] + ","
    }
    else if(separator === undefined && i == arr.length -1){
      newArr += arr[i]
    }

    if((separator !== " " && separator.length !== 0 && i !== arr.length -1) || (typeof(separator) !== 'string' && typeof(separator) !== 'undefined' && i !== arr.length -1)){
      newArr += arr[i] + separator;
    }else if((separator !== " " && separator.length !== 0 && i == arr.length -1) || (typeof(separator) !== 'string' && typeof(separator) !== 'undefined')){
      newArr += arr[i]
    }
  } 
}
return newArr;
}
console.log(Join(array, 1));

// reverce()
function reverce(arr){
  let arr1 = [];
  for(let i = arr.length-1; i >= 0; i--){
    arr1.push(arr[i]);
  }
  return arr1
}
console.log(reverce(['hello', 2, '', '265', 'world']));

//some()
function some(arr, x) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === x){
      return true;
    }
  }
  return false;
}
console.log(some([2,4,5], 3));



//findIndex()
let findIndex = function(arr, fun){
  for(let i = 0; i < arr.length;i++){
    if(fun(arr[i])){
      return i;
    }
  }
  return -1
}
console.log(findIndex(['ab', 5, undefined, 5 ], function(val){
  return val === 6
}));

// // find()
let find = function(arr, fun){
  for(let i = 0; i < arr.length; i++){
    if(fun(arr[i])){
      return arr[i]
    }
  }
  if(i !== -1){
   return arr[i];
  }
   return undefined;
 }
 
 console.log(find([3, 6, undefined, 7 ], function(val){
   return val > 5
 }));

// forEach()
let forEach = function (arr, fun){
  for(let i = 0; i < arr.length; i++){
    fun(arr[i]);
  }
}
forEach([5,1], function(val){
  console.log(val);
})

//split 
let arr1 =[]
function split(string, separator, arr) {
  
	if (!(typeof(string) === 'string')) {
		throw new TypeError(' Invalid or unexpected token`');
	}
  if(!(typeof(separator) === 'string')){
    return [string]
  }
	if ((string === '' && separator === '') ) {
		return [];
	}else if(string === '' && typeof(separator) === 'string'){
    return ['']
  }

	const separatorIndex = indexOf(string, separator);
	if (separatorIndex === -1) {
		return [string];
	}else if(separatorIndex || separatorIndex === 0){
    arr.push(SubString(string, 0, separatorIndex));
    arr.push(SubString(string, separatorIndex+separator.length, string.length));
    string = SubString(string, separatorIndex+separator.length, string.length);

    if(indexOf(string, separator) > 0){
      arr.pop();
      split(string, separator,arr)
    }
  }
  return arr;
}
console.log(split('world word', 'wo', arr1))

// indexOf
function indexOf(str, sub){
  if(sub.length > str.length){
    return -1;
  }
  for(let i = 0; i < str.length - sub.length + 1; i++){
    if(str[i] !== sub[0]){
      continue;
    }
    let exists = true;
    for(let j = 1; j < sub.length && exists; j++){
      if(str[i+j] === sub[j]) {
        continue;
      } 
      exists = false;
    }
    if(exists === true){
      return i;
    }
  }
  return -1;
}
console.log(indexOf("hello world", "wor"));

// reaplaceAll()
let x = []
function reaplaceAll(example, pattern, replacement){
  let result = split(example,pattern, x)
  result = Join(result, replacement);
  return result;
}
console.log(reaplaceAll("The quick brown fox jumps over the lazy fox", "fox", "dog"));

//replace()
function replace(example, pattern, replacement) {
  let b = indexOf(example, pattern);
  let result = SubString(example, 0, b) + replacement + SubString(example, b+pattern.length, example.length);
  return(result);
}
console.log(replace("The quick brown fox jumps over the lazy fox", "fox", "dog"));

// //substring
function SubString(str, num1, num2) {
  let subString = "";
  let len = str.length;

  if (num1 < 0 && num2 > len) {
    num1 = 0;
    num2 = len;
  } 
  if (num1 < 0) {
    num1 = 0;
  }
  if(num2 > len){
    num2 = len;
  } 
  for (i = num1; i < num2; i++) {
    subString = subString + str[i];
  }
  return subString; 
}
console.log(SubString("hello world", 1, 4));

//trim
function trim(str) {
  var begin = 0;
  var end = str.length - 1;
  while (begin <= end && str.charCodeAt(begin) < 33) { 
    ++begin; 
  }
  while (end > begin && str.charCodeAt(end) < 33) {
    --end; 
  }
  return SubString(str, begin, end + 1)
}
console.log("'"+trim("   Angry Bird  ")+"'");