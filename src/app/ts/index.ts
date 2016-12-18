import * as angular from 'angular';

import { tsComponent } from './ts.component';

export default angular
  .module('ts', [])
  .component(tsComponent.name, tsComponent.options)
  .name;
