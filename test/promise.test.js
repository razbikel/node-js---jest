const promise = require('../promise');

test('Promise resolved', async () => {
        const res = await promise('http://localhost:3020/test')
        expect(res).toStrictEqual('test');
})

test('Promise rejected', async () => {
    promise('http://localhost:3020/test')
    .catch(error => {
        expect(error).toStrictEqual(Error("url is wrong"))
    })
})