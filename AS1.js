async function AS1(params) {
  console.log(" This is function without await");
  //return 3;
  throw new Error("This is error");
}

AS1()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
