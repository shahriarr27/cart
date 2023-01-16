var product1PBtn = document.querySelectorAll('.plusBtn');
var product1MBtn = document.getElementById('product1MBtn');

var totalPrice = document.getElementById('totalPrice');

total();

product1PBtn.forEach(function(element) {
  var updatePrice = element.parentNode.parentNode.querySelector('.productPrice');
  let fixedPrice = (updatePrice.innerHTML).slice(1);
  increasePrice(element,fixedPrice,updatePrice)
});


function increasePrice(element,fixedPrice,updatePrice){
  element.addEventListener('click', function(){
    var q1 = element.parentNode.querySelector('.form-control').value;
    price = parseFloat((fixedPrice)) * parseInt(q1);
    updatePrice.innerHTML = '$'+price;
    total();
  });
}

function total(){
  var productPrices = document.querySelectorAll('.productPrice');
  var allPrices = []
  var sumTotalPrice = 0;
  for(i=0; i<productPrices.length; i++){
    allPrices.push(parseFloat(productPrices[i].innerHTML.slice(1)));
    sumTotalPrice = sumTotalPrice + allPrices[i];
  }
  totalPrice.innerHTML = '$'+ sumTotalPrice;
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

