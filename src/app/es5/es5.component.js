angular.module('es5').component('es5Component', {
  template: '<h2>{{ $ctrl.getTitle() }}</h2>',
  controller: function () {

    function getTitle() {
      return 'ES5 Component';
    }

    this.getTitle = getTitle;
  }
});
