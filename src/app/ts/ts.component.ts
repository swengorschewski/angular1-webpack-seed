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
    template: require('./ts.component.html'),
    controller: TSController
  }
};
