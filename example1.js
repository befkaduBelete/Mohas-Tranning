function outerFunction() {
  console.log("Outer function");
  const outerNumber = 2;
  function inerfunction() {
    const inNumber = 3;
    console.log(
      "Inner function ",
      inNumber,
      "This is outer number ",
      outerNumber,
    );
    function f3() {
      console.log("THis is outer number ", outerNumber);
      console.log("THis is innner number ", inNumber);
    }
    f3();
  }

  inerfunction();
}

outerFunction();
//inerfunction();
