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
    $("#annFutVal").text(
      `${annFutVal(resArr[1].value, resArr[3].value, resArr[4].value).toFixed(
        2
      )}`
    );
    $("#depFutVal").text(
      `${depFutVal(resArr[0].value, resArr[1].value, resArr[4].value).toFixed(
        2
      )}`
    );
    $("#totalDeposit").text(`${totalDeposit().toFixed(2)}`);
  });
});

const annFutVal = function (r, p, n) {
  if (resArr[2].value == "1") {
    return ((p * ((1 + r / 100) ** n - 1)) / (r / 100)) * (1 + r / 100);
  }
  if (resArr[2].value == "2") {
    return (p * ((1 + r / 100) ** n - 1)) / (r / 100);
  }
};

const depFutVal = function (i, r, n) {
  return i * (1 + r / 100) ** n;
};

const totalDeposit = function () {
  return (
    annFutVal(resArr[1].value, resArr[3].value, resArr[4].value) +
    depFutVal(resArr[0].value, resArr[1].value, resArr[4].value)
  );
};
