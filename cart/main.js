var product1PBtn = document.getElementById('product1PBtn');
var product1MBtn = document.getElementById('product1MBtn');

var product1Price = document.getElementById('product1Price');

let fixedPrice = (product1Price.innerHTML).slice(1);


product1PBtn.addEventListener('click', function(){
  var form1 = document.getElementById('form1').value;

  var price = parseFloat(fixedPrice) * parseInt(form1);

  product1Price.innerHTML = '$'+price;

});
