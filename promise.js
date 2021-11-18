const  axios  = require('axios');

module.exports = (url) => {
    return new Promise((resolve, reject) => {
        if (url != 'http://localhost:3020/test'){
            reject(Error('url is wrong'))
        }
        else{
            axios(url).then(data => {
                resolve(data.data);
            })
        }
    })
}