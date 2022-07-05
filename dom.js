var likeButton = document.getElementsByClassName("fa fa-heart");
var removeButton = document.getElementsByClassName("removekey");
var cart = document.getElementsByClassName("items");
var plusButton = document.getElementsByClassName("plus-button");
var quantity = document.getElementsByClassName("input-value");
var minusButton = document.getElementsByClassName("minus-button");
var itemPrice = document.getElementsByClassName("item-price");
let total1 = document.getElementsByClassName("total1");
let finalPrice = document.getElementsByClassName("final-price");

for (let i = 0; i < likeButton.length; i++) {
  likeButton[i].addEventListener("click", function () {
    likeButton[i].classList.toggle("heart-on");
  });
}

for (let i = 0; i < cart.length; i++) {
  removeButton[i].addEventListener("click", function () {
    cart[i].classList.add("remove-div");
  });
}

for (let i = 0; i < plusButton.length; i++) {
  plusButton[i].addEventListener("click", function () {
    quantity[i].innerHTML++;
    total1[i].innerHTML = +quantity[i].innerHTML * +itemPrice[i].innerHTML;
    finalPrice.innerHTML = +finalPrice.innerHTML + +itemPrice[i].innerHTML;
  });
}

for (let i = 0; i < minusButton.length; i++) {
  minusButton[i].addEventListener("click", function () {
    if (quantity[i].innerHTML == 0) {
      alert("Can't Go Below this, Click Remove.");
    } else {
      quantity[i].innerHTML--;
      total1[i].innerHTML = +quantity[i].innerHTML * +itemPrice[i].innerHTML;
      finalPrice.innerHTML = +finalPrice.innerHTML - +itemPrice[i].innerHTML;
    }
  });
}
