var product1PBtn = document.querySelectorAll('.plusBtn');
var product1MBtn = document.getElementById('product1MBtn');
var product1Price = document.getElementById('product1Price');

var totalPrice = document.getElementById('totalPrice');
var currentTotal = (product1Price.innerText).slice(1);
totalPrice.innerHTML = '$'+ (parseFloat(currentTotal));
var price;


product1PBtn.forEach(function(element) {
  var updatePrice = element.parentNode.parentNode.querySelector('.productPrice');
  let fixedPrice = (updatePrice.innerHTML).slice(1);
  increasePrice(element,fixedPrice,updatePrice)
});


product1MBtn.addEventListener('click', function(){
  var q1 = document.getElementById('form1').value;
  decreasePrice(product1Price);
});

function increasePrice(element,fixedPrice,updatePrice){
  element.addEventListener('click', function(){
    var q1 = element.parentNode.querySelector('.form-control').value;
    price = parseFloat((fixedPrice)) * parseInt(q1);
    updatePrice.innerHTML = '$'+price;

    //current total
    
    //add product price
    totalPrice.innerHTML = '$'+ price;
  });
}

function decreasePrice(product){
  var updatedPrice = (product1Price.innerText).slice(1);
  price = parseFloat(updatedPrice) - parseInt(fixedPrice);
  product.innerHTML = '$'+price;
  totalPrice.innerHTML = '$'+ price;
  if(updatedPrice <= 0){
    product1Price.innerHTML = '$'+0;
  }
}

