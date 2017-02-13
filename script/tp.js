// Hub ; Porte bleue
AFRAME.registerComponent('blue_door', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      window.location.href = "mag1.html";
    });
  }
});

// Hub ; Porte verte
AFRAME.registerComponent('green_door', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      window.location.href = "mag2.html";
    });
  }
});

// Magasin 1 ; Stand 1
AFRAME.registerComponent('mag1_stand1', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      var secondCameraEl = document.querySelector('#first-camera');
        secondCameraEl.setAttribute('position', { x: 0, y: 5, z: 0 });
    });
  }
});

// Magasin 1 ; Stand 2
AFRAME.registerComponent('mag1_stand2', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      var secondCameraEl = document.querySelector('#first-camera');
        secondCameraEl.setAttribute('position', { x: 0, y: 5, z: 0 });
    });
  }
});

// Magasin 2 ; Stand 1
AFRAME.registerComponent('mag2_stand1', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      var secondCameraEl = document.querySelector('#first-camera');
        secondCameraEl.setAttribute('position', { x: 0, y: 5, z: 0 });
    });
  }
});

// Magasin 2 ; Stand 2
AFRAME.registerComponent('mag2_stand2', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      var secondCameraEl = document.querySelector('#first-camera');
        secondCameraEl.setAttribute('position', { x: 0, y: 5, z: 0 });
    });
  }
});