import * as angular from 'angular';

import { tsComponent } from './ts.component';
import { TSService } from './ts.service';

export default angular
  .module('ts', [])
  .component(tsComponent.name, tsComponent.options)
  .service('tsService', TSService)
  .name;
