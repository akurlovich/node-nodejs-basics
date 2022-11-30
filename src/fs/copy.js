import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  try {
    fs.access(__dirname + '/files', (err) => {
      if (err) {
        throw new Error('FS operation failed');
      } 
    fs.access(__dirname + '/files_copy', (err) => {
      if (!err) {
        throw new Error('FS operation failed');

      }
    })

    fs.cpSync(__dirname + '/files', __dirname + '/files_copy', {recursive: true});
  
    })
  } catch (error) {
    
  }
};

await copy();