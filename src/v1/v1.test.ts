import { DESCRIPTION, Promise } from ".";

describe(DESCRIPTION, () => {
  it("should support async resolve", (done) => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("ok");
      }, 10);
    }).then((value) => {
      expect(value).toEqual("ok");
      done();
    }, done);
  });
});
