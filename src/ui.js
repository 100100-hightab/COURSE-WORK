const readline = require('readline');
const storage = require('./storage');
const { generateProgressBar } = require('./progress');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showSubjects() {
    const subjects = storage.readData();
    console.clear();
    console.log('=== ТРЕКЕР ИЗУЧЕНИЯ ДИСЦИПЛИН ===\n');
    
    if (subjects.length === 0) {
        console.log('Список дисциплин пуст.');
    } else {
        subjects.forEach((sub, index) => {
            const bar = generateProgressBar(sub.progress);
            console.log(`${index + 1}. ${sub.name.padEnd(20)} ${bar}`);
        });
    }
    console.log('\n================================');
}

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

module.exports = { showSubjects, askQuestion, rl };
