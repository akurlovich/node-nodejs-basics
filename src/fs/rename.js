import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  if (!fs.existsSync(__dirname + '/files/wrongFilename.txt') || fs.existsSync('./files/properFilename.md')) {
    throw new Error('FS operation failed')
  }
  fs.renameSync(__dirname + '/files/wrongFilename.txt', __dirname + '/files/properFilename.md')
};

await rename();