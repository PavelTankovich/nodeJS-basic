const fs = require('fs'); //подключение модуля File System
const data = `
    hello from NodeJS
    I am random text
`;

fs.writeFileSync('nodejs.txt', data); //создание файла и запись в него данных (Sync - синхронно)

const result = fs.readFileSync('nodejs.txt', { // чтение файла возвращает значение (Sync - синхронно)
    encoding: 'utf-8' //формат
}); 

console.log(__dirname); // путь до файла
console.log(__filename);  // путь до файла с файлом