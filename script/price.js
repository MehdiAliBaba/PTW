var bought = 0;
var total = 0;
AFRAME.registerComponent('total_price', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      bought = 0;
      total += bought;
      var totalPrice = document.querySelector('#to_pay');
      totalPrice.setAttribute('value', total);
      bought = 0;
    });
  }
});