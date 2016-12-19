export class TSService {
  getData(): Promise<any> {
    return Promise.resolve({ data: 'promise-test' });
  }
}
