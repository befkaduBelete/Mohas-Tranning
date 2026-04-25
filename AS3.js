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

async function numberInfo() {
  try {
    const res = await getNumber(200);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
