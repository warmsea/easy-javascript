import { DESCRIPTION, Promise } from '.';

describe(DESCRIPTION, () => {
  it('should support sync resolve', (done) => {
    new Promise((resolve, reject) => {
      resolve('ok');
    }).then((value) => {
      expect(value).toEqual('ok');
      done();
    }, done);
  });
});
