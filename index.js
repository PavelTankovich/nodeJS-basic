const express = require('express'); // веб сервер
const bodyParser = require('body-parser'); //парсер данных с post запроса

const weatherRequest = require('./requests/weather.request');

const app = express(); // запуск сервера

// устанавливаем стандартное расширение для рендера ejs
app.set('view engine', 'ejs'); // view engine движок отвечающий за рендер страниц 

// позволяет исп-ть доп опции
app.use(
    express.static('public') // указываем путь к файлам с статикой
);
app.use(
    bodyParser.urlencoded({ // декодируем данные
        extended: true
    }) 
);

//обработка GET запроса
//request.params получает данные с get запроса
//по умлч node смотрит в папку views и ищет там index.ejs
app.get('/', (request, response) => { // при get запросе
    response.render('index'); // мы рендерим файл index с раширение ejs
});

//обработка GET запроса
//request.body получает данные с post запроса
app.post('/', (request, response) => {
    const { city } = request.body; 

    weatherRequest(city);

    response.render('index')
});

app.listen(8000, () => { // конфигурация сервера
    console.log('Server started on port 8000');
});