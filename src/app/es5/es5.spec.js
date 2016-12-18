import './es5.module';
import './es5.component';

describe('ES5Component', () => {
  var controller;

  beforeEach(angular.mock.module('es5'));
  beforeEach(angular.mock.inject(($componentController) => {
    controller = $componentController('es5Component', null, null);
  }));

  it('should return a string', () => {
    expect(controller.getTitle()).toBe('ES5 Component');
  });
});
