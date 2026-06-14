const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, '../data/subjects.json');

function readData() {
    try {
        if (!fs.existsSync(FILE_PATH)) {
            fs.writeFileSync(FILE_PATH, '[]');
        }
        const data = fs.readFileSync(FILE_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Ошибка чтения базы данных:', error.message);
        return [];
    }
}

function saveData(data) {
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(data));
    } catch (error) {
        console.error('Ошибка записи в базу данных:', error.message);
    }
}

module.exports = { readData, saveData };
