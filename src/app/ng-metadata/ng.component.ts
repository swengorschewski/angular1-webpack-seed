import { Component } from 'ng-metadata/core';

@Component({
  selector: 'ng-component',
  template: `<h2>{{ $ctrl.title }}</h2>`
})
export class NGComponent {
  title = 'NG Component';
}
