function generateProgressBar(percentage, size = 20) {
    const filledLength = Math.round((percentage / 100) * size);
    const emptyLength = size - filledLength;
    
    const filled = '█'.repeat(filledLength); // Заполненная часть
    const empty = '░'.repeat(emptyLength);   // Пустая часть
    
    return `[${filled}${empty}] ${percentage}%`;
}

module.exports = { generateProgressBar };
