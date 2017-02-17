var bought = 0;
var total = 0;

// Each function is used for a different price (todo: search another way to use only one function)
// They are ordered in crescent order
// Pay button opacity is updated at each function in case the consumer buy again after he pays
// Yes, they are some easter eggs in those prices

AFRAME.registerComponent('payup', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      total = 0;
      var totalPrice = document.querySelector('#to_pay');
      totalPrice.setAttribute('value', total);

      var paid = document.querySelector('#paid');
      paid.setAttribute('opacity', 0.25);
    });
  }
});

AFRAME.registerComponent('price0-25', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      bought = 0.25;
      total += bought;
      var totalPrice = document.querySelector('#to_pay');
      totalPrice.setAttribute('value', total);
      bought = 0;
      
      var textPrice = document.querySelector('#text0-25');
      textPrice.setAttribute('value', 'Achete');
      
      var paid = document.querySelector('#paid');
      paid.setAttribute('opacity', 1);
    });
  }
});

AFRAME.registerComponent('price1', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      bought = 1;
      total += bought;
      var totalPrice = document.querySelector('#to_pay');
      totalPrice.setAttribute('value', total);
      bought = 0;
      
      var textPrice = document.querySelector('#text1');
      textPrice.setAttribute('value', 'Achete');
      
      var paid = document.querySelector('#paid');
      paid.setAttribute('opacity', 1);
    });
  }
});

// Apple pi(e)
AFRAME.registerComponent('price3-14', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      bought = 3.14;
      total += bought;
      var totalPrice = document.querySelector('#to_pay');
      totalPrice.setAttribute('value', total);
      bought = 0;
      
      var textPrice = document.querySelector('#text3-14');
      textPrice.setAttribute('value', 'Achete');
      
      var paid = document.querySelector('#paid');
      paid.setAttribute('opacity', 1);
    });
  }
});

// The cake is a lie
AFRAME.registerComponent('price7-13', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      bought = 7.13;
      total += bought;
      var totalPrice = document.querySelector('#to_pay');
      totalPrice.setAttribute('value', total);
      bought = 0;
      
      var textPrice = document.querySelector('#text7-13');
      textPrice.setAttribute('value', 'Achete');
      
      var paid = document.querySelector('#paid');
      paid.setAttribute('opacity', 1);
    });
  }
});

// Elite price
AFRAME.registerComponent('price13-37', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      bought = 13.37;
      total += bought;
      var totalPrice = document.querySelector('#to_pay');
      totalPrice.setAttribute('value', total);
      bought = 0;
      
      var textPrice = document.querySelector('#text13-37');
      textPrice.setAttribute('value', 'Achete');
      
      var paid = document.querySelector('#paid');
      paid.setAttribute('opacity', 1);
    });
  }
});

// The Ultimate Question of Life, the Universe and Everything
AFRAME.registerComponent('price42', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      bought = 42;
      total += bought;
      var totalPrice = document.querySelector('#to_pay');
      totalPrice.setAttribute('value', total);
      bought = 0;
      
      var textPrice = document.querySelector('#text42');
      textPrice.setAttribute('value', 'Achete');
      
      var paid = document.querySelector('#paid');
      paid.setAttribute('opacity', 1);
    });
  }
});

// Elite price, again
AFRAME.registerComponent('price73-31', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      bought = 73.31;
      total += bought;
      var totalPrice = document.querySelector('#to_pay');
      totalPrice.setAttribute('value', total);
      
      var textPrice = document.querySelector('#text73-31');
      textPrice.setAttribute('value', 'Achete');
      bought = 0;
      
      var paid = document.querySelector('#paid');
      paid.setAttribute('opacity', 1);
    });
  }
});

AFRAME.registerComponent('price99-99', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      bought = 99.99;
      total += bought;
      var totalPrice = document.querySelector('#to_pay');
      totalPrice.setAttribute('value', total);
      bought = 0;
      
      var textPrice = document.querySelector('#text99-99');
      textPrice.setAttribute('value', 'Achete');
      
      var paid = document.querySelector('#paid');
      paid.setAttribute('opacity', 1);
    });
  }
});