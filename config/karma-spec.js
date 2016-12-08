import angular from 'angular';
import mocks from 'angular-mocks';

// this file is only being used by karma
requireAll((require).context("../src", true, /spec.(ts|js)$/));
function requireAll(r) {
    r.keys().forEach(r);
}
