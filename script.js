const quantityDisplay = document.getElementById("quantity");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const cartDrawer = document.getElementById("cart-drawer");
const overlay = document.getElementById("drawer-overlay");
const addToCartBtn = document.querySelector(".add-to-cart-btn");
const closeCartBtn = document.getElementById("close-cart");
const drawerQuantity = document.getElementById("drawer-quantity");
const drawerSale = document.querySelector(".drawer-sale-price");
const drawerCompare = document.querySelector(".drawer-compare-price");
const drawerIncrease = document.getElementById("drawer-increase");
const drawerDecrease = document.getElementById("drawer-decrease");
const deleteItemBtn = document.getElementById("delete-item");
const salePriceEl = document.querySelector(".sale-price");
const comparePriceEl = document.querySelector(".compare-price");
const checkoutBtn = document.querySelector(".checkout-btn");

const maxQuantity = 10;
const minQuantity = 1;
const baseSalePrice = 249;
const baseComparePrice = 369;

let quantity = parseInt(localStorage.getItem("cartQuantity")) || 1;

function updatePrices() {
  const totalSale = baseSalePrice * quantity;
  const totalCompare = baseComparePrice * quantity;

  salePriceEl.textContent = `$${totalSale.toFixed(2)}`;
  comparePriceEl.textContent = `$${totalCompare.toFixed(2)}`;
}

function saveQuantity() {
  localStorage.setItem("cartQuantity", quantity);
}

function resetQuantity() {
  quantity = 1;
  localStorage.removeItem("cartQuantity");
  quantityDisplay.textContent = quantity;
  updatePrices();
  syncDrawer();
}

function openDrawer() {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
}

function closeDrawer() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
}

function syncDrawer() {
  drawerQuantity.textContent = quantity;
  drawerSale.textContent = `$${(baseSalePrice * quantity).toFixed(2)}`;
  drawerCompare.textContent = `$${(baseComparePrice * quantity).toFixed(2)}`;
}

increaseBtn.addEventListener("click", () => {
  if (quantity < maxQuantity) {
    quantity++;
    quantityDisplay.textContent = quantity;
    updatePrices();
    saveQuantity();
  }
});

decreaseBtn.addEventListener("click", () => {
  if (quantity > minQuantity) {
    quantity--;
    quantityDisplay.textContent = quantity;
    updatePrices();
    saveQuantity();
  }
});

addToCartBtn.addEventListener("click", () => {
  syncDrawer();
  openDrawer();
});

closeCartBtn.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

drawerIncrease.addEventListener("click", () => {
  if (quantity < maxQuantity) {
    quantity++;
    quantityDisplay.textContent = quantity;
    updatePrices();
    syncDrawer();
    saveQuantity();
  }
});

drawerDecrease.addEventListener("click", () => {
  if (quantity > minQuantity) {
    quantity--;
    quantityDisplay.textContent = quantity;
    updatePrices();
    syncDrawer();
    saveQuantity();
  }
});

deleteItemBtn.addEventListener("click", () => {
  resetQuantity();
  closeDrawer();
});

checkoutBtn.addEventListener("click", () => {
  alert("Thanks for ordering. Your order is on the way.");
  resetQuantity();
  closeDrawer();
});

quantityDisplay.textContent = quantity;
updatePrices();
