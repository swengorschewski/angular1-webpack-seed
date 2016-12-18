import * as angular from 'angular';

import tsModule from './ts';
import es6Module from './es6';

import './es5/es5.module';
import './es5/es5.component';

export default angular
  .module('app', [
    tsModule,
    es6Module,
    'es5'
  ]).name;
