import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  try {
    if (!fs.existsSync(__dirname + '/files/fileToRemove.txt')) {
      throw new Error('FS operation failed')
    }
    fs.unlinkSync(__dirname + '/files/fileToRemove.txt');
    } catch (err) {
      console.error(err);
    }
};

await remove();