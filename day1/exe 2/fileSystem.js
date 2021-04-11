const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is David')
fs.copyFileSync('notes.txt', 'anotherNotes.txt');
fs.renameSync('notes.txt', 'newNotesName.txt')
fs.readdirSync('./').forEach(file => {
    console.log(file);
});
fs.appendFileSync('newNotesName.txt', ' this txt was appended', 'utf8');