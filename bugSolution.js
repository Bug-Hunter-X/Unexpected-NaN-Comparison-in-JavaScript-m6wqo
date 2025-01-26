function foo(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true; // Consider NaNs equal 
  } else if (a === b) {
    return true;
  } else {
    return false;
  }
}

console.log(foo(NaN, NaN)); //true
console.log(foo(NaN, 1)); //false
console.log(foo(1,1)); //true