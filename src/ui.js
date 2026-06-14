const readlineSync = require('readline-sync');
const storage = require('./storage');
const progressModule = require('./progress');

function showSubjects() {
    const subjects = storage.readData();
    
    console.clear();
    console.log('=== ТРЕКЕР ИЗУЧЕНИЯ ДИСЦИПЛИН ===\n');
    
    if (subjects.length === 0) {
        console.log('Список дисциплин пуст.');
    } else {
        for (let i = 0; i < subjects.length; i++) {
            const sub = subjects[i];
            const bar = progressModule.generateProgressBar(sub.progress);
            
            console.log((i + 1) + '. ' + sub.name + '\t' + bar);
        }
    }
    console.log('\n================================');
}

function askQuestion(query) {
    return readlineSync.question(query);
}

module.exports = { showSubjects, askQuestion };
