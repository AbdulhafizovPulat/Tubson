const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elText = document.querySelector("#info");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const number = Number(elInput.value);
  elText.className = "";

  if (isNaN(number)) {
    elText.textContent = "Siz notogri qiymat kiritdingiz.";
    elText.className = "dangerText";
  } else {
    let result = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i == 0) {
        result++;
      }
    }
    if (result <= 2) {
      elText.textContent = `${number} - "Tub" son.`;
      elText.className = "success";
    } else {
      elText.textContent = `${number} - "Tub" son emas.`;
      elText.className = "failed";
    }
  }
});
