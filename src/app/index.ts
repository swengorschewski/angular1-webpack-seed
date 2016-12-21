import * as angular from 'angular';

import './es5/es5.module';
import './es5/es5.component';

import es6Module from './es6';
import ngModule from './ng-metadata';
import tsModule from './ts';

export default angular
  .module('app', [
    tsModule,
    es6Module,
    ngModule,
    'es5'
  ]).name;
