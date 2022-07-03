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
        type: "note-img",
        info: {
            url: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1011630/W-Maldives-916x516.jpg",
            label: "to-do list",
            title: "Maldives",
            txt: "first thing, second thing",
            todos: null,
        },
        style: {
            backgroundColor: "var(--kp4)"
        }
    },
    {

        id: utilService.makeId(),
        type: "note-img",
        info: {
            url: "https://breathelife2030.imgix.net/wp-content/uploads/2019/02/paris-1836415_1920.jpg",
            label: "to-do list",
            title: "Paris at night",
            txt: "first thing, second thing",
            todos: null,
        },
        style: {
            backgroundColor: "var(--kp12)"
        }
    },
    {

        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
            title: "World cup starting soonn",
            txt: "this year from 21 november to 18 december",
            url: "this year from 21 november to 18 december"
        },
        style: {
            backgroundColor: "var(--kp6)"
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
            backgroundColor: "var(--kp11)"
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
    {

        id: utilService.makeId(),
        type: "note-img",
        info: {
            url: "https://www.harlemworldmagazine.com/wp-content/uploads/2022/06/United-Kingdom.jpg",
            label: "to-do list",
            title: "London view",
            txt: "first thing, second thing",
            todos: null,
        },
        style: {
            backgroundColor: "var(--kp10)"
        }
    },
    {

        id: utilService.makeId(),
        type: "note-txt",
        info: {
            url: "cancel the gym membership",
            label: "to-do list",
            title: "Important!!!",
            txt: "cancel the gym membership",
            todos: null,
        },
        style: {
            backgroundColor: "var(--kp20)"
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