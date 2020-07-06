//Form Data
let resArr;

$(document).ready(() => {
  $("form").submit(() => {
    //Extract Data
    resArr = $("form").serializeArray();
    console.log(resArr);
    event.preventDefault(); //Don't Touch!

    //Change home->home1
    $(".home1").fadeIn("slow");

    //Display Results
    $("#mPay").text(
      `${mPay(resArr[0].value, resArr[1].value, resArr[2].value).toFixed(2)}`
    );
    $("#iPay").text(`${iPay(resArr[1].value).toFixed(4)}`);
    $("#kPay").text(
      `${kPay(
        resArr[0].value,
        resArr[1].value,
        resArr[3].value,
        mPay(resArr[0].value, resArr[1].value, resArr[2].value).toFixed(2)
      ).toFixed(0)}`
    );
  });
});

// Monthly Payments
const mPay = function (p, r, n) {
  const rM = r / 100 / 12;
  const r0 = rM * (1 + rM) ** (n * 12);
  const r1 = (1 + rM) ** (n * 12) - 1;

  return p * (r0 / r1);
};

const iPay = function (r) {
  return r / 12;
};

// Add K = No. of Payments
const kPay = function (p, r, k, mP) {
  const rM = r / 100 / 12;

  return p * (1 + rM) ** k - mP * (((1 + rM) ** k - 1) / rM);
};
