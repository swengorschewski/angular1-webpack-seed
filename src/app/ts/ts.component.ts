import * as angular from 'angular';

class TSController {
  /*@ngInject*/
  constructor(private $http: angular.IHttpService) { }
}

export const tsComponent: angular.IComponentOptions = {
  template: '<h2>TS Component</h2>',
  controller: TSController
};
