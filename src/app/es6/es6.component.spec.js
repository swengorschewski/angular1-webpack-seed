import aboutModule from './index.js';

describe("'testing js tests'", () => {
    beforeEach(angular.mock.module(aboutModule));

    beforeEach(angular.mock.inject(() => { }));

    it("should be totally true", () => {
        expect(true).toBe(true);
    });
});
