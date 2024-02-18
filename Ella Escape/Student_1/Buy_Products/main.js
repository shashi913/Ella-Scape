//--navigationBar
const activePage = window.location.pathname;
var activeId;
const navLinks = document.querySelectorAll(".options a"); //to get a list with all navlinks.
for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].pathname == activePage) {
        activeId = navLinks[i].id
        document.getElementById(activeId).style.cssText= "background-Color : #5CAA35; color: white";
        break;
    }
}

function resizing_func() {
    if (document.body.clientWidth < 1280) {
        document.querySelector(".navigationbar ul").style.cssText = "margin-left : 20%";
    }
    else {
        document.querySelector(".navigationbar ul").style.cssText="margin-left : 50%";
    }
    
    let links = document.querySelectorAll("li a");
    if (document.body.clientWidth < 810) {
        for (let i = 0; i < links.length; i++) {
            if (links[i].id != activeId) {
                document.getElementById(links[i].style.display = "none");
            }
        }
        document.querySelector(".navigationbar ul").style.cssText = "display: flex; justify-content: center";
    }
    else {
        for (let i = 0; i < links.length; i++) {
            if (links[i].id != activeId) {
                document.getElementById(links[i].style.display = "inline");
            }
        }
    }
}

resizing_func();

//resize navber
window.addEventListener("resize", resizing_func);
//navbar--

//Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//Open Cart
cartIcon.onclick = () =>{
   cart.classList.add('active');
};
//Close Cart
closeCart.onclick = () =>{
    cart.classList.remove('active');
 };


// Cart Working JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else {
    ready();
}

//Making Function
function ready(){
    // Remove items from Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++){
       var input = quantityInputs[i];
       input.addEventListener("change", quantityChanged);
    }
    //Add To Cart
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
    //Buy Button Work
    document
        .getElementsByClassName('btn-buy')[0]
        .addEventListener('click', buyButtonClicked);
}
//Buy Button
function buyButtonClicked(){
    var cartContent = document.getElementsByClassName('cart-content')[0];

    // Check if cart is empty
  if (cartContent.children.length == 0) {
    alert('Please add items to your cart before placing your order.');
    // If the user clicks "OK", redirect to a new page
if (confirm("Press OK to leave this page")) {
  window.location.href = "buyProducts.html";
}

    return;
  }
  
  // Otherwise, complete order as normal
  alert('Proceed to payment!');
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
    
    updatetotal();
}
// Remove Items from Cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
// Quantity changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}
//Add to Cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
        alert('You have already add this item to cart');
        return;
    }
}
var cartBoxContent = `
                    <img src="${productImg}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                        <input type="number" value="1" class="cart-quantity" >
                    </div>
                    <!-- Remove Cart -->
                    <i class='bx bxs-trash-alt cart-remove'></i>`;
                    
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

                            
//Update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        // If price contain some cents value
        total = Math.round(total *100) / 100;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    
}

//Show done screen
function paymentDone (){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    var donemodal = document.getElementById("doneModal");

    donemodal.style.display = "block";

    setTimeout(function(){
        donemodal.style.display = "block";
        window.location.href = 'buyProducts.html';}, 2200);
    localStorage.clear();
    return false;
}

function setItems(products){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null){
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    } else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }
    
    
    localStorage.setItem("", JSON.stringify(cartItems));
	(cartItems);
}

function totalCost(products){
    let cartCost = localStorage.getItem('totalCost');
    
    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + products.price);
    } else {
        localStorage.setItem("totalCost", products.price);
    }
}

function deleteItem(cartItem){
    let cartItems = localStorage.getItem("productsInCart")
    let total = localStorage.getItem("totalCost")
    let cartNumbers = localStorage.getItem("cartNumbers")
    cartItems = JSON.parse(cartItems);

    cartNumbers -= cartItems[cartItem].inCart
    total -= (cartItems[cartItem].price*cartItems[cartItem].inCart)

    delete cartItems[cartItem]

    localStorage.setItem("", JSON.stringify(cartItems));
    localStorage.setItem("cartNumbers", cartNumbers);
    localStorage.setItem("totalCost", total);
    location.reload();
}

function reduceOneItem(cartItem){
    let cartItems = localStorage.getItem("productsInCart")
    let total = parseFloat(localStorage.getItem("totalCost"))
    let cartNumbers = parseInt(localStorage.getItem("cartNumbers"))
    cartItems = JSON.parse(cartItems);

    if(parseInt(cartItems[cartItem].inCart) === 1) {
        delete cartItems[cartItem]
    } else {
        cartItems[cartItem].inCart -= 1
        cartNumbers -= 1
    }
    total -= parseFloat(cartItems[cartItem].price)

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("cartNumbers", cartNumbers.toString());
    localStorage.setItem("totalCost", total.toString());
    location.reload();
}


function addOneItem(cartItem){
    var cartItems = localStorage.getItem("productsInCart")
    var total = parseFloat(localStorage.getItem("totalCost"))
    var cartNumbers = parseInt(localStorage.getItem("cartNumbers"))
    cartItems = JSON.parse(cartItems);

    cartNumbers += 1
    cartItems[cartItem].inCart += 1
    total += parseFloat(cartItems[cartItem].price)

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("cartNumbers", cartNumbers.toString());
    localStorage.setItem("totalCost", total.toString());
    location.reload();
}


function displayCartMain() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');

    let productContainer = document.querySelector(".cart-products")
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="cart-product-title">
                <div class="product-img">
                <i class="fas fa-trash" onclick="deleteItem('${item.tag}')"></i>
                   
                    
                    <img src ="img/product-images/${item.tag}.png">
                </div>
                <span>${item.name}</span>
            </div>
            <div class="cart-product-price">$${item.price}.00</div>
            <div class="cart-quantity">
                <i class="fas fa-plus-circle" onclick="addOneItem('${item.tag}')"></i>
                <span>${item.inCart}</span>
                <i class="fas fa-minus-circle" onclick="reduceOneItem('${item.tag}')"></i>
            </div>
            <div class="cart-total">
                $${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h3 class="basketTotalTitle">
                Basket Total
                </h3>
                <h3 class="basketTotal">
                    $${cartCost}.00
                </h3>
            </div>
        `;
    }
}




function displayCartModal() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');

    let productContainer = document.querySelector(".modal-cart-products")
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="cart-product-title">
                <div class="product-img">
                    <img src ="img/product-images/${item.tag}.png">
                </div>
                <span>${item.name}</span>
            </div>
            <div class="cart-product-price">$${item.price}.00</div>
            <div class="cart-quantity">
                <span>${item.inCart}</span>
            </div>
            <div class="cart-total">
                $${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h2 class="basketTotalTitle">
                Total Cost
                </h2>
                <h2 class="basketTotal">
                    $${cartCost}.00
                </h2>
            </div>
        `;
    }
}


function formValidation(){
const form = document.getElementById('form');
const fullname = document.getElementById('fname');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const cardName = document.getElementById('cardName');
const creditCardNum = document.getElementById('creditCardNum');
const expMonth = document.getElementById('expMonth');
const expYear = document.getElementById('expYear');
const cv = document.getElementById('cv');

// Email validation function
function validateEmail(email) {
    // Regular expression pattern for email validation
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//show error function
function showError(input, message){
    const InputBox = input.parentElement;
    InputBox.className = 'inputBox error';
    const small = InputBox.querySelector('small');
    small.innerText = message;
}

//show valid
function showValid(input){
  InputBox = input.parentElement;
  InputBox.className = 'inputBox valid';
}


//Event listeners
form.addEventListener('submit', function (e){
    e.preventDefault();

    //form validation
    if(fullname.value === ''){
        showError(fullname, 'First name is required');
    } else {
        showValid(fullname);
    }

    if(email.value === ''){
      showError(email, 'Email is required');
  } else if(!validateEmail(email.value)){
    showError(email, 'Please enter a valid email address');
  } else {
    showValid(email);
  }

    if(address.value === ''){
    showError(address, 'Address is required');
  } else {
    showValid(address);
  }

  if(city.value === ''){
    showError(city, 'City is required');
  } else {
    showValid(city);
  }
  if(country.value === ''){
    showError(country, 'Country is required');
  } else {
    showValid(country);
  }
  if(zipcode.value === ''){
    showError(zipcode, 'ZipCode is required');
  } else {
    showValid(zipcode);
  }
  if(cardName.value === ''){
    showError(cardName, 'Card Name is required');
  } else {
    showValid(cardName);
  }
  if(creditCardNum.value === ''){
    showError(creditCardNum, 'Credit Card Number is required');
  } else {
    showValid(creditCardNum);
  }
  if(expMonth.value === ''){
    showError(expMonth, 'Expirory Month is required');
  } else {
    showValid(expMonth);
  }
  if(expYear.value === ''){
    showError(expYear, 'Expirory Year is required');
  } else {
    showValid(expYear);
  }
  if(cv.value === ''){
    showError(cv, 'CV is required');
  } else {
    showValid(cv);
  }
  if (fullname.value !=='' && email.value !=='' && validateEmail(email.value) && address.value !== '' && city.value !== '' && country.value !== '' && zipcode.value !== '' && cardName.value !== '' && creditCardNum.value !== '' && expMonth.value !== '' && expYear.value !== '' && cv.value !== '') {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
      }
      document.getElementById('userName').innerHTML = fullname.value
      document.getElementById('fullname').innerHTML = fullname.value
      document.getElementById('Email').innerHTML = email.value
      document.getElementById('Address').innerHTML = address.value
      document.getElementById('City').innerHTML = city.value
      document.getElementById('Country').innerHTML = country.value
      document.getElementById('ZipCode').innerHTML = zipcode.value
  }

return false;

//if form is valid, submit the form
form.submit();
})

}

displayCartMain();
displayCartModal();
