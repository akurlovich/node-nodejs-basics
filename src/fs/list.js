import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  fs.access(__dirname + '/files', (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fs.readdirSync(__dirname + '/files').forEach(file => {
        console.log(file);
      });
    }
  });

};

await list();