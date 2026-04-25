const randomNumber = new Promise((resolve, reject) => {
  setInterval(() => {
    const number = Math.random();
    reject(new Error("The number is smmaler than 0.5"));
    // if (number > 0.5) {
    //   resolve(number);
    // } else {
    //   reject(new Error("The number is smmaler than 0.5"));
    // }
  }, 2000);
});

randomNumber
  .then((result) => {
    console.log(`This is the random number ${result}`);
  })
  .catch((error) => {
    console.log(error.message);
  });
