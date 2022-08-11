function function1(fn) {
  setTimeout(function () {
    console.log("mensaje 1");
    fn();
  }, 1000);
}
function function2() {
  console.log("mensaje 2");
}

console.log(function1(function2));