import { DESCRIPTION, Promise } from '.';

describe(DESCRIPTION, () => {
  it('should support onFulfill to return a promise', (done) => {
    new Promise((resolve, reject) => {
      resolve('one');
    }).then((value) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${value} two`), 10);
      });
    }).then((value) => {
      expect(value).toEqual('one two');
      done();
    }, done);
  });
});
