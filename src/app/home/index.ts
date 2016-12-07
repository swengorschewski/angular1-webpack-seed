import * as angular from 'angular';

import { homeComponent } from './components/home.component';

export default angular.module('home', [])
    .component('homeComponent', homeComponent);
