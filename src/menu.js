const storage = require('./storage');
const ui = require('./ui');

function addSubject() {
    const name = ui.askQuestion('Введите название дисциплины: ');
    
    if (!name.trim()) {
        console.log('Ошибка: Название не может быть пустым!');
        ui.askQuestion('\nНажмите Enter для продолжения...');
        return;
    }
    
    const subjects = storage.readData();
    
    const newSubject = { 
        name: name.trim(), 
        progress: 0 
    };
    subjects.push(newSubject);
    
    storage.saveData(subjects);
    console.log('Дисциплина успешно добавлена!');
    ui.askQuestion('\nНажмите Enter для продолжения...');
}

function removeSubject() {
    const subjects = storage.readData();
    
    if (subjects.length === 0) {
        console.log('Нечего удалять.');
        ui.askQuestion('\nНажмите Enter для продолжения...');
        return;
    }

    const input = ui.askQuestion('Введите номер дисциплины для удаления: ');
    const index = parseInt(input) - 1;

    if (isNaN(index) || index < 0 || index >= subjects.length) {
        console.log('Ошибка: Некорректный номер дисциплины!');
    } else {
        subjects.splice(index, 1);
        storage.saveData(subjects);
        console.log('Дисциплина удалена.');
    }
    ui.askQuestion('\nНажмите Enter для продолжения...');
}

function updateProgress() {
    const subjects = storage.readData();
    
    if (subjects.length === 0) {
        console.log('Список дисциплин пуст.');
        ui.askQuestion('\nНажмите Enter для продолжения...');
        return;
    }

    const subInput = ui.askQuestion('Введите номер дисциплины: ');
    const index = parseInt(subInput) - 1;

    if (isNaN(index) || index < 0 || index >= subjects.length) {
        console.log('Ошибка: Некорректный номер дисциплины!');
        ui.askQuestion('\nНажмите Enter для продолжения...');
        return;
    }

    const progInput = ui.askQuestion('Введите новый прогресс (от 0 до 100): ');
    const progress = parseInt(progInput);

    if (isNaN(progress) || progress < 0 || progress > 100) {
        console.log('Ошибка: Прогресс должен быть числом от 0 до 100!');
    } else {
        subjects[index].progress = progress;
        storage.saveData(subjects);
        console.log('Прогресс обновлен.');
    }
    ui.askQuestion('\nНажмите Enter для продолжения...');
}

module.exports = { addSubject, removeSubject, updateProgress };
