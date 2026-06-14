console.log('Study tracker is successfully started!');

// Подключаем наши модули
const ui = require('./ui');
const menu = require('./menu');

function main() {
    let running = true;
    
    while (running) {
        ui.showSubjects();
        
        console.log('Доступные действия:');
        console.log('1. Добавить дисциплину');
        console.log('2. Удалить дисциплину');
        console.log('3. Изменить прогресс');
        console.log('4. Выйти');
        
        const choice = ui.askQuestion('\nВыберите действие (1-4): ');
        
        switch (choice.trim()) {
            case '1':
                menu.addSubject();
                break;
            case '2':
                menu.removeSubject();
                break;
            case '3':
                menu.updateProgress();
                break;
            case '4':
                running = false;
                console.log('До свидания!');
                break;
            default:
                console.log('Ошибка: Неверный пункт меню. Попробуйте снова.');
                ui.askQuestion('\nНажмите Enter для продолжения...');
        }
    }
}

// Запускаем программу
main();
