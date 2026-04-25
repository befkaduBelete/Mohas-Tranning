function OuterFunction() {
  let number = 0;
  console.log("This is outer function");
  return function innnerFunction() {
    number++;
    console.log("This is inner function number ", number);
  };
}
const inner = OuterFunction();
inner();
inner();
inner();
