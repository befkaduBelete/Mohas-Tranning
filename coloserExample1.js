function f1() {
  console.log("Outer function");
  return function () {
    console.log("This is function 2");
  };
  // return f2;
}

const x = f1();
x();
