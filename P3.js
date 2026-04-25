function getNumber(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 == 0) {
        resolve(number);
      } else {
        reject(new Error("This number is odd"));
      }
    }, 3000);
  });
}

getNumber(4)
  .then((result) => {
    console.log("Sep 1 ", result);
    return getNumber(6);
  })
  .then((result) => {
    console.log("Sep 2 ", result);
    return getNumber(3);
  })
  .then((result) => {
    console.log("Sep 3 ", result);
  })
  .catch((err) => {
    console.log(err.message);
  });
