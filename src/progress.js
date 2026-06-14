function generateProgressBar(percentage, size) {
    if (size === undefined) {
        size = 20;
    }

    const filledLength = Math.round((percentage / 100) * size);
    const emptyLength = size - filledLength;
    
    let filled = '';
    for (let i = 0; i < filledLength; i++) {
        filled += '█';
    }
    
    let empty = '';
    for (let j = 0; j < emptyLength; j++) {
        empty += '░';
    }
    
    return '[' + filled + empty + '] ' + percentage + '%';
}

module.exports = { generateProgressBar };
