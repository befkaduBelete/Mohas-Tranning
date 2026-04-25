function createIntialBalance(intital) {
  let balance = intital;
  console.log("Account is open init balance ", balance);
  return {
    deposit: (amount) => {
      balance = balance + amount;
      console.log(`Deposit is = ${amount}  Currecnt balance = ${balance}`);
    },

    withdrow: (amount) => {
      if (balance < amount) {
        console.log("Inseffsent balance ");
      } else {
        balance = balance - amount;
        console.log(`Withdrow is = ${amount}  Currecnt balance = ${balance}`);
      }
    },
  };
}
const banck = createIntialBalance(100);
banck.deposit(300);
banck.withdrow(200);
banck.withdrow(400);
