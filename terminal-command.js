const fs = require("fs");

module.exports.ls = () => {
  fs.readdir("./", (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, "");

    console.log(filesToString);
  });
};

module.exports.touch = name => {
  fs.writeFile(name, "", err => {
    console.log(`${name} file was created`);
  });
};

module.exports.mkdir = name => {
  fs.mkdir(`./${name}`, err => {
    console.log(`${name} folder was created`);
  });
};
