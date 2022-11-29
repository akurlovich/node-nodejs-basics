import fs from 'fs';

const rename = async () => {
  if (!fs.existsSync('./files/wrongFilename.txt') || fs.existsSync('./files/properFilename.md')) {
    throw new Error('FS operation failed')
  }
  fs.renameSync('./files/wrongFilename.txt', './files/properFilename.md')
};

await rename();