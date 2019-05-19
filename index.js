const myLibrary = require("./my-library");

// execute my-library here
myLibrary.myFirstMethod();

const terminalCommand = require("./terminal-command");

terminalCommand.ls();
terminalCommand.mkdir("sampleFolder");
terminalCommand.touch("sampleFolder/sampleFile.txt");
