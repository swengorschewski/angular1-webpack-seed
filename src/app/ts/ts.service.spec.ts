import { TSService } from './ts.service';

describe('TSService', () => {
  let tsService: TSService;

  beforeEach(() => {
    tsService = new TSService();
  });

  it('should return a promise', (done) => {
    tsService.getData().then((result) => {
      expect(result).toEqual({ data: 'promise-test' });
      done();
    });
  });
});
