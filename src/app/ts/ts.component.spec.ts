import * as angular from 'angular';

import tsModule from '../';
import { tsComponent, TSController } from './ts.component';

describe('TSComponent', () => {
  let controller: TSController;

  beforeEach(angular.mock.module(tsModule));
  beforeEach(angular.mock.inject(($componentController: ng.IComponentControllerService, $httpBackend: ng.IHttpBackendService) => {
    controller = <TSController>$componentController(tsComponent.name, { $http: $httpBackend }, null);
  }));
  it('should return a string', () => {
    expect(controller.title).toBe('TS Component');
  });
});
