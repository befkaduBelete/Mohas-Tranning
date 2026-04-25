function f1(camera) {
  console.log("THis is f1");
  return camera();
}
function camera() {
  console.log("Can take a pic");
}

const x = f1();
x();
