import * as angular from 'angular';

import { aboutComponent } from './components/about.component';

export default angular.module('about', [])
    .component('aboutComponent', aboutComponent);