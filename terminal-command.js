const fs = require("fs");
const filename = "file.txt";

module.exports.ls = () => {
  fs.readdir("./", (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, "");

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.open(filename, "w", (err, fd) => {
    if (err) throw err;
    fs.close(fd, err => {
      if (err) throw err;
    });
  });
};

module.exports.mkdir = () => {
  fs.mkdir("/tmp/a/apple", { recursive: true }, err => {
    if (err) throw err;
  });
};
