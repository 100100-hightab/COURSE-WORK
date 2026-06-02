const storage = require('./storage');
const ui = require('./ui');

async function addSubject() {
    const name = await ui.askQuestion('Введите название дисциплины: ');
    if (!name.trim()) {
        console.log('Ошибка: Название не может быть пустым!');
        await ui.askQuestion('\nНажмите Enter для продолжения...');
        return;
    }
    
    const subjects = storage.readData();
    subjects.push({ name: name.trim(), progress: 0 });
    storage.saveData(subjects);
    console.log('Дисциплина успешно добавлена!');
    await ui.askQuestion('\nНажмите Enter для продолжения...');
}

async function removeSubject() {
    const subjects = storage.readData();
    if (subjects.length === 0) {
        console.log('Нечего удалять.');
        await ui.askQuestion('\nНажмите Enter для продолжения...');
        return;
    }

    const input = await ui.askQuestion('Введите номер дисциплины для удаления: ');
    const index = parseInt(input) - 1;

    if (isNaN(index) || index < 0 || index >= subjects.length) {
        console.log('Ошибка: Некорректный номер дисциплины!');
    } else {
        subjects.splice(index, 1);
        storage.saveData(subjects);
        console.log('Дисциплина удалена.');
    }
    await ui.askQuestion('\nНажмите Enter для продолжения...');
}

async function updateProgress() {
    const subjects = storage.readData();
    if (subjects.length === 0) {
        console.log('Список дисциплин пуст.');
        await ui.askQuestion('\nНажмите Enter для продолжения...');
        return;
    }

    const subInput = await ui.askQuestion('Введите номер дисциплины: ');
    const index = parseInt(subInput) - 1;

    if (isNaN(index) || index < 0 || index >= subjects.length) {
        console.log('Ошибка: Некорректный номер дисциплины!');
        await ui.askQuestion('\nНажмите Enter для продолжения...');
        return;
    }

    const progInput = await ui.askQuestion('Введите новый прогресс (от 0 до 100): ');
    const progress = parseInt(progInput);

    if (isNaN(progress) || progress < 0 || progress > 100) {
        console.log('Ошибка: Прогресс должен быть числом от 0 до 100!');
    } else {
        subjects[index].progress = progress;
        storage.saveData(subjects);
        console.log('Прогресс обновлен.');
    }
    await ui.askQuestion('\nНажмите Enter для продолжения...');
}

module.exports = { addSubject, removeSubject, updateProgress };
