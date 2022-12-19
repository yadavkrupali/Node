const fs = require("fs");
const path = require("path");

const dataPath = path.resolve("Module2", "TODO_app", "data.json");

const loadnote = () => {
    try {
        const databuffer = fs.readFileSync(dataPath);

        const data = databuffer.toString();
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
};

const Addnote = (name) => {
    // console.log(name);
    // loadnote();
    const note = loadnote();
    const duplicateData = note.filter((note) => note.name == name);
    if (duplicateData.length == 0) {
        note.push({ name: name });
    } else {
        console.log("Recoard is already exist");
    }
    saveNote(note);
};

const removeNote = (name) => {
    const note = loadnote();
    const keepNote = note.filter((note) => note.name != name);
    // console.log(keepNote.length);
    // console.log(note.length);
    if (keepNote.length < note.length) {
        saveNote(keepNote);
    } else {
        console.log("user is not found");
    }
};

const updateNote = (data) => {
    const notes = loadnote();
    const keepNote = notes.filter((note) => note.name != data.name);
    // console.log(notes);
    // console.log(data.name);
    // console.log(notes.length);
    // console.log(keepNote.length);

    if (notes.length > keepNote.length) {
        notes.filter((note) => {
            if (note.name === data.name) {
                // const note = loadnote();
                // console.log(note.name, " ===", data.name);
                const duplicatData = notes.filter(
                    (note) => note.name == data.newName
                );
                if (duplicatData.length == 0) {
                    // console.log(duplicatData.length);
                    note.name = data.newName;
                } else {
                    console.log("User already exits try new user");
                }
            }
        });
        saveNote(notes);
        console.log("Update succesfully");
    } else {
        console.log("user not exist");
    }
};

const saveNote = (data) => {
    const filterData = JSON.stringify(data);

    fs.writeFileSync(dataPath, filterData);
};

module.exports = {
    Addnote,
    removeNote,
    updateNote,
};
