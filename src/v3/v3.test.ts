import { expect } from 'chai';
import { DESCRIPTION, Promise } from '.';

describe(DESCRIPTION, () => {
  it('should support onFulfill to return value', (done) => {
    new Promise((resolve, reject) => {
      resolve('one');
    }).then((value) => {
      return `${value} two`;
    }).then((value) => {
      expect(value).to.equal('one two');
      done();
    }, done);
  });
});
