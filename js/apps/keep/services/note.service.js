import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util.service.js'


const NOTES_KEY = 'notes';


export const noteService = {
    query,
    remove,
    updateNote,
    post,
    makeId,
};

const gNotes = [
    {

        id: utilService.makeId(),
        type: "note-todos",
        info: {
            label: "to-do list",
            title: "to-do list",
            txt: "first thing, second thing",
            todos: null,
            // [
            //     { txt: "first thing", doneAt: null },
            //     { txt: "second thing", doneAt: 187111111 }
            // ]
        },
        style: {
            backgroundColor: "var(--kp3)"
        }
    },
    {

        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
            title: "World cup starting soonn",
            txt: "this year from 21 november to 18 december"
        },
        style: {
            backgroundColor: "var(--kp2)"
        }
    },
    {

        id: utilService.makeId(),
        type: "note-video",
        info: {
            url: "https://www.youtube.com/watch?v=C22hQKE_32c",
            title: "remeber to watch this before sunday"
        },
        style: {
            backgroundColor: "var(--kp12)"
        }
    },
    {


        id: utilService.makeId(),
        type: "note-video",
        info: {
            url: "https://www.youtube.com/watch?v=-25g1wgJwfY",
            title: "Get it done before july 2nd"
        },
        style: {
            backgroundColor: "var(--kp5)"
        }

    },
    {

        id: utilService.makeId(),
        type: "note-img",
        info: {
            url: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
            title: "Rick and morty new season this month!!"
        },
        style: {
            backgroundColor: "var(--kp4)"
        }
    },
];


_createNotes();

function query() {
    return storageService.query(NOTES_KEY)
}
function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}
function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = gNotes
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}
function updateNote(updatedNote) {
    return storageService.put(NOTES_KEY, updatedNote)
}
function post(newNote) {
    return storageService.post(NOTES_KEY, newNote)
}
function makeId() {
    return storageService.makeId
}