const quantityDisplay = document.getElementById("quantity");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let quantity = 1;
const maxQuantity = 10;
const minQuantity = 1;

const baseSalePrice = 249;
const baseComparePrice = 369;

const salePriceEl = document.querySelector(".sale-price");
const comparePriceEl = document.querySelector(".compare-price");

function updatePrices() {
  salePriceEl.textContent = `$${(baseSalePrice * quantity).toFixed(2)}`;
  comparePriceEl.textContent = `$${(baseComparePrice * quantity).toFixed(2)}`;
}

increaseBtn.addEventListener("click", () => {
  if (quantity < maxQuantity) {
    quantity++;
    quantityDisplay.textContent = quantity;
    updatePrices();
  }
});

decreaseBtn.addEventListener("click", () => {
  if (quantity > minQuantity) {
    quantity--;
    quantityDisplay.textContent = quantity;
    updatePrices();
  }
});
