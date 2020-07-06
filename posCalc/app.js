//Form Data
let resArr;

$(document).ready(() => {
  $("form").submit(() => {
    //Extract Data
    resArr = $("form").serializeArray();
    console.log(resArr);
    event.preventDefault(); //Don't Touch!

    //Modal Window - TO DO

    //Change home->home1
    $(".home1").fadeIn("slow");

    //Display Results
    $("#quantity1").text(
      `Suggested Quantity - ${quantity(
        Number(resArr[0].value),
        Number(resArr[3].value)
      )}`
    );
    $("#SP1").text(`${stopProfit()}`);
  });
});

//Calc Lot Size
const lotSize = function (x) {
  if (x <= 100) {
    return "0.01-0.02";
  }
  if (x <= 300) {
    return "0.02-0.04";
  }
  if (x <= 500) {
    return "0.04-0.06";
  }
  if (x <= 700) {
    return "0.06-0.08";
  }
  if (x <= 900) {
    return "0.08-0.1";
  }
  if (x <= 2000) {
    return "0.1-0.15";
  }
  if (x <= 4000) {
    return "0.3-0.35";
  }
  if (x <= 6000) {
    return "0.5-0.55";
  }
  if (x <= 8000) {
    return "0.7-0.75";
  }
  if (x <= 10000) {
    return "0.9-1.0";
  } else {
    return "1.0 and more";
  }
};

//Quantity
const quantity = function (x, y) {
  if (resArr.length == 4) {
    return (x / y).toFixed(2);
  } else {
    return lotSize(resArr[0].value);
  }
};

//Calc SL & TP
const stopProfit = function () {
  if (resArr[2].value == "1") {
    return `Sl: ${(
      Number(resArr[3].value) -
      Number(resArr[3].value) * (Number(resArr[1].value) / 100)
    ).toFixed(2)} | TP: ${(
      Number(resArr[3].value) +
      Number(resArr[3].value) * (Number(resArr[1].value) / 100)
    ).toFixed(2)}`;
  }
  if (resArr[2].value == "2") {
    return `Sl: ${(
      Number(resArr[3].value) -
      Number(resArr[3].value) * (Number(resArr[1].value) / 100)
    ).toFixed(2)} | TP: ${(
      Number(resArr[3].value) +
      Number(resArr[3].value) * (Number(resArr[1].value) / 100) * 2
    ).toFixed(2)}`;
  }
  if (resArr[2].value == "3") {
    return `Sl: ${(
      Number(resArr[3].value) -
      Number(resArr[3].value) * (Number(resArr[1].value) / 100)
    ).toFixed(2)} | TP: ${(
      Number(resArr[3].value) +
      Number(resArr[3].value) * (Number(resArr[1].value) / 100) * 3
    ).toFixed(2)}`;
  }
  if (resArr[2].value == "4") {
    return `Sl: ${(
      Number(resArr[3].value) -
      Number(resArr[3].value) * (Number(resArr[1].value) / 100)
    ).toFixed(2)} | TP: ${(
      Number(resArr[3].value) +
      Number(resArr[3].value) * (Number(resArr[1].value) / 100) * 4
    ).toFixed(2)}`;
  }
  if (resArr[2].value == "5") {
    return `Sl: ${(
      Number(resArr[3].value) -
      Number(resArr[3].value) * (Number(resArr[1].value) / 100)
    ).toFixed(2)} | TP: ${(
      Number(resArr[3].value) +
      Number(resArr[3].value) * (Number(resArr[1].value) / 100) * 5
    ).toFixed(2)}`;
  }
};
