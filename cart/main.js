var productPBtn = document.querySelectorAll('.plusBtn');
var productMBtn = document.querySelectorAll('.minusBtn');

var totalPrice = document.getElementById('totalPrice');

total();

productPBtn.forEach(function(element) {
  var updatePrice = element.parentNode.parentNode.querySelector('.productPrice');
  let fixedPrice = (updatePrice.innerHTML).slice(1);
  increasePrice(element,fixedPrice,updatePrice)
});

productMBtn.forEach(function(element) {
  var eachPrice = element.parentNode.parentNode.querySelector('.productPrice');
  let fixedPrice = (eachPrice.innerHTML).slice(1);
  decreasePrice(element,fixedPrice,eachPrice)
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

function decreasePrice(element,fixedPrice,updatePrice){
  element.addEventListener('click', function(){
    var currentPrice = element.parentNode.parentNode.querySelector('.productPrice');
    price = parseFloat(currentPrice.innerHTML.slice(1)) - parseFloat(fixedPrice);
    updatePrice.innerHTML = '$'+price;
    total();
    if(parseFloat(currentPrice.innerHTML.slice(1)) <= 0){
      element.setAttribute('disabled', '')
    }
  });
}

