const express = require('express'); // веб сервер

const app = express(); // запуск сервера

// устанавливаем стандартное расширение для рендера ejs
app.set('view engine', 'ejs'); // view engine движок отвечающий за рендер страниц 

// позволяет исп-ть доп опции
app.use(
    express.static('public') // указываем путь к файлам с статикой
);

//по умлч node смотрит в папку views и ищет там index.ejs
app.get('/', (request, response) => { // при get запросе
    response.render('index'); // мы рендерим файл index с раширение ejs
});

app.listen(8000, () => { // конфигурация сервера
    console.log('Server started on port 8000');
});