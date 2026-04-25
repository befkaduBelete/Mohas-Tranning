const P1 = new Promise((resolve, reject) => {
  resolve(" Promisse Resolved ");
});

P1.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err.message);
});
