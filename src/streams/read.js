import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const fileBuffer = fs.readFileSync(__dirname + '/files/fileToRead.txt');
  process.stdout.write(fileBuffer);
};

await read();