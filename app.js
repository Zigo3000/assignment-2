/*1
const path = require("path");

function logCurrentPath() {
  
  const filePath = __filename;

  
  const dirPath = __dirname;

  

  const output = {
    File: filePath,
    Dir: dirPath
  };

  console.log(output); 
}

logCurrentPath();

2
const path = require("path");

function getFileName(filePath) {
  return path.basename(filePath);
}

const result = getFileName("/user/files/report.pdf");
console.log(result);

3

const path = require("path");

function buildPath({dir,name,ext}){
  return path.join(dir,name+ext);
}

4

const path = require("path");

function getFileExtension(filePath) {
  return path.extname(filePath);
}


console.log(getFileExtension("/docs/readme.md"));  


5
const path = require("path");

function parsePath(filePath) {
  const base = path.basename(filePath);      
  const name = path.parse(base).name;        
  const ext  = path.parse(base).ext;         

  return { Name: name, Ext: ext };
}


console.log(parsePath("folder/app.js"));

//6
const path = require("path");

function isAbsolutePath(filePath) {
  return path.isAbsolute(filePath);
}


console.log(isAbsolutePath("/folder/zigok/file.txt"));
*/
/*7
const path = require("path");

function joinSegments(...parts) {
  return path.join(...parts);
}

const result = joinSegments("src", "components", "App.js");
console.log(result);

/*
8
const path = require("path");

function resolveToAbsolute(relativePath) {
  return path.resolve(relativePath);
}

console.log(resolveToAbsolute("./folder/app.js"));

//9
const path = require("path");

function joinTwoPaths(p1, p2) {
  return path.join(p1, p2);
}


const result = joinTwoPaths("/folder1", "folder2/file.txt");
console.log(result);

//10

const fs = require("fs");

function deleteFileAsync(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log("Error deleting the file:", err);
      return;
    }

    
    const fileName = filePath.split("/").pop();
    console.log(`The ${fileName} is deleted.`);
  });
}

deleteFileAsync("/folder/zigok/file.txt");

//11
const fs = require("fs");

function createFolderSync(folderName) {
  try {
    fs.mkdirSync(folderName);
    console.log("Success");
  } catch (err) {
    console.log("Error:", err.message);
  }
}


createFolderSync("newFolder");

//12
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("start", () => {
  console.log("Welcome event triggered!");
});


emitter.emit("start");

//13
const EventEmitter = require("events");

const emitter = new EventEmitter();


emitter.on("login", (username) => {
  console.log(`User logged in: ${username}`);
});


emitter.emit("login", "Ahmed");

//14
const fs = require("fs");

function readFileSyncAndLog(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log("the file content =>", data);
  } catch (err) {
    console.log("Error reading file:", err.message);
  }
}


readFileSyncAndLog("./file.txt");

//15
const fs = require("fs");

function writeFileAsync(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log("Error writing to file:", err.message);
      return;
    }

    console.log("File written successfully!");
  });
}


writeFileAsync("./async.txt", "Async save");

//16
const fs = require("fs");

function checkDirectoryExists(path) {
  const exists = fs.existsSync(path);
  console.log(exists);
}


checkDirectoryExists("./file.txt");

17
const os = require("os");

function getSystemInfo() {
  return {
    Platform: os.platform(),
    Arch: os.arch()
  };
}


console.log(getSystemInfo());
