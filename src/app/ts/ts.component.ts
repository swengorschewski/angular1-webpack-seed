import * as angular from 'angular';

export class TSController {
  /*@ngInject*/
  constructor($http: ng.IHttpService) { }

  get title() {
    return 'TS Component';
  }
}

export const tsComponent = {
  name: 'tsComponent',
  options: <angular.IComponentOptions>{
    template: '<h2>{{ $ctrl.title }}</h2>',
    controller: TSController
  }
};
