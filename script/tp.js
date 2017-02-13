AFRAME.registerComponent('tp1', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      var secondCameraEl = document.querySelector('#first-camera');
        secondCameraEl.setAttribute('position', { x: 0, y: 5, z: 0 });
    });
  }
});
