import { expect } from 'chai';
import { DESCRIPTION, Promise } from '.';

describe(DESCRIPTION, () => {
  it('should support sync resolve', (done) => {
    new Promise((resolve, reject) => {
      resolve('ok');
    }).then((value) => {
      expect(value).to.equal('ok');
      done();
    }, done);
  });
});
