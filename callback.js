
const  axios  = require('axios');

module.exports = (url, cb) => {
    if (url !== 'http://localhost:3020/test') { 
        cb(Error('url is wrong'))
    } else {
        axios.get(url).then(data => {
            cb(null, data);
        }).catch(err => cb(err))
    }
}