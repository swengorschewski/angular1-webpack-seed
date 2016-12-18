export class ES6Controller {
  /*@ngInject*/
  constructor($http) { }

  get title() {
    return 'ES6 Component';
  }
}

export default {
  template: '<h2>{{ $ctrl.title }}</h2>',
  controller: ES6Controller
};
