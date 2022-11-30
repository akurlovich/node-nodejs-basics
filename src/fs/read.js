import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    if (!fs.existsSync(__dirname + '/files/fileToRead.txt')) {
      throw new Error('FS operation failed')
    } else {
      fs.readFile(__dirname + '/files/fileToRead.txt',"utf8" , (err, contents) => {
        console.log(contents);
    })
   
  };
};

await read();