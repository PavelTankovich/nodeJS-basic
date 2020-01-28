//2316cf8f734383758c85475634360d0c
const requestPromise = require('request-promise');

module.exports = async function (city = '') {
    if (!city) {
        throw new Error('Error');
    }

    const KEY = '2316cf8f734383758c85475634360d0c';
    const uri = 'http://api.openweathermap.org/data/2.5/weather';

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial',
        },
        json: true
    }

    try {//оборачиваем для отлова ошибок
        const { name, main: { temp } } = await requestPromise(options); // асинхронное ожидание ответа на запрос
        const cel = ((temp - 32) * 5/9).toFixed(2);

        return {
            weather: `${name}: ${cel}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            error : error.error.message
        }
    }

};