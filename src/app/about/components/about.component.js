class AboutController {
    /*@ngInject*/
    constructor($http) { }
}

export const aboutComponent = {
    template: '<h2>about</h2><span class="glyphicon glyphicon-search" aria-hidden="true"></span>',
    controller: AboutController
}