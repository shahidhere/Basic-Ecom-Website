let totalPrice = document.getElementById('totalPrice');
let totalItems = document.getElementById('noOfItems');
let items = 1;
let allPrice = 0;

function addToCart(num){
    if(items<9){
        allPrice += num;
        totalPrice.textContent = allPrice;
        totalItems.textContent = items;
        items++;
    }
    else{
        alert("Your cart is full. You can't add more items. Please proceed to buy the products");
    }
}
