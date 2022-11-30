import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  if (!fs.existsSync(__dirname + '/archive.gz')) {
    throw new Error('FS operation failed')
  }
  fs.createReadStream(__dirname + '/files/archive.gz')
  .pipe(zlib.createUnzip())
  .pipe(fs.createWriteStream(__dirname + '/files/fileToCompress.txt'))
};

await decompress();