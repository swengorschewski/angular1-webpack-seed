import * as angular from 'angular';

import es6Module from '../';
import es6Component from './es6.component';

describe('TSComponent', () => {
  let controller;

  beforeEach(angular.mock.module(es6Module));
  beforeEach(angular.mock.inject(($componentController, $httpBackend) => {
    controller = $componentController('es6Component', { $http: $httpBackend }, null);
  }));
  it('should return a string', () => {
    expect(controller.title).toBe('ES6 Component');
  });
});
