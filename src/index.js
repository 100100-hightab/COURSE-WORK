console.log ('Study tracker is successfully started!')
const ui = require('./ui');
const menu = require('./menu');

async function main() {
    let running = true;
    while (running) {
        ui.showSubjects();
        console.log('Доступные действия:');
        console.log('1. Добавить дисциплину');
        console.log('2. Удалить дисциплину');
        console.log('3. Изменить прогресс');
        console.log('4. Выйти');
        
        const choice = await ui.askQuestion('\nВыберите действие (1-4): ');
        
        switch (choice.trim()) {
            case '1':
                await menu.addSubject();
                break;
            case '2':
                await menu.removeSubject();
                break;
            case '3':
                await menu.updateProgress();
                break;
            case '4':
                running = false;
                ui.rl.close();
                console.log('До свидания!');
                break;
            default:
                console.log('Ошибка: Неверный пункт меню. Попробуйте снова.');
                await ui.askQuestion('\nНажмите Enter для продолжения...');
        }
    }
}

main();
