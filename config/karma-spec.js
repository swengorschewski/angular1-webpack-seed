import angular from 'angular';
import mocks from 'angular-mocks';

requireAll((require).context('../src', true, /spec.(ts|js)$/));
function requireAll(r) {
  r.keys().forEach(r);
}
