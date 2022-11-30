import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  if (!fs.existsSync(__dirname + '/files/fileToCompress.txt')) {
    throw new Error('FS operation failed')
  }
  fs.createReadStream(__dirname + '/files/fileToCompress.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(__dirname + '/files/archive.gz'))
};

await compress();