import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  try {
  if (fs.existsSync(__dirname + '/files/fresh.txt')) {
    throw new Error('FS operation failed')
  } else {
    fs.writeFileSync(__dirname + '/files/fresh.txt', 'I am fresh and young');

  }
  } catch (err) {
    console.error(err);
  }
};

await create();