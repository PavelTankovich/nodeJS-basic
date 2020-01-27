//2316cf8f734383758c85475634360d0c
const requestPromise = require('request-promise');

module.exports = async function (city = '') {
    if (!city) {
        throw new Error('Error');
    }

    console.log('city: ', city)
};