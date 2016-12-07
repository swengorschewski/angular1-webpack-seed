import * as angular from 'angular';

import homeModule from './home';
import aboutModule from './about';
import './es5';

export default angular.module('app', [homeModule.name, aboutModule.name, 'es5']);
