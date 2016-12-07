import * as angular from 'angular';

class HomeController {
    /*@ngInject*/
    constructor(private $http: angular.IHttpService) { }
}

export const homeComponent: angular.IComponentOptions = {
    template: '<h2>home</h2><span class="glyphicon glyphicon-search" aria-hidden="true"></span>',
    controller: HomeController
};
