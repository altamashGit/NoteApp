function saveNote() {
    const noteInput = document.getElementById('noteInput').value;
    if (noteInput.trim() === '') return;

    let notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.push(noteInput);
    localStorage.setItem('notes', JSON.stringify(notes));
    document.getElementById('noteInput').value = '';
    displayNotes();
}

function displayNotes() {
    const notesList = document.getElementById('notesList');
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notesList.innerHTML = '';
    notes.forEach(note => {
        const div = document.createElement('div');
        div.className = 'note';
        div.textContent = note;
        notesList.appendChild(div);
    });
}

window.onload = displayNotes;