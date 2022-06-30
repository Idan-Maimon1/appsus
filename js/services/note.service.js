import { storageService } from './async-storage-service.js';
import { utilService } from './util.service.js'


const NOTES_KEY = 'notes';


export const noteService = {
    query,
};

const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            title: "lorem lorem",
            txt: "lorem ipsum!"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
            title: "Rick and morty"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "to-do list",
            todos: [
                { txt: "first thing", doneAt: null },
                { txt: "second thing", doneAt: 187111111 }
            ]
        }
    },
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            title: "lorem lorem",
            txt: "lorem ipsum!"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
            title: "Rick and morty"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "to-do list",
            todos: [
                { txt: "first thing", doneAt: null },
                { txt: "second thing", doneAt: 187111111 }
            ]
        }
    }
];

_createNotes();

function query() {
    return storageService.query(NOTES_KEY)
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length || notes0length > 4) {
        notes = gNotes
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}
