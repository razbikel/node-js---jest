const callback = require('../callback');

test('Should return data', (done) => {
    callback('http://localhost:3020/test', (err,data) => {
        expect(data.data).toStrictEqual('test');
        done();
    })
})

test('Shoud return error', (done) => {
    callback('http://localhost:3020/tes', (err,data) => {
        expect(err).toStrictEqual(Error("url is wrong"));
        done();
    })
})

