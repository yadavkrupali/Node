const yargs = require("yargs");
const note = require("./note");

// command for add
yargs.command({
    command: "Add",
    describe: "This is add command",
    builder: {
        name: {
            describe: "Enter name",
            demandOption: true,
            type: "String",
        },
    },
    handler(argu) {
        note.Addnote(argu.name);
    },
});

// command for remove
yargs.command({
    command: "remove",
    describe: "This is remove command",
    builder: {
        name: {
            describe: "Enter the name",
            demandOption: true,
            type: "String",
        },
    },
    handler(argu) {
        note.removeNote(argu.name);
    },
});

// command for update
yargs.command({
    command: "update",
    describe: "This is update command",
    builder: {
        name: {
            describe: "Enter the name",
            demandOption: true,
            type: "String",
        },
        newName: {
            describe: "Enter the name",
            demandOption: true,
            type: "String",
        },
    },
    handler(argu) {
        note.updateNote(argu);
    },
});

yargs.parse();
