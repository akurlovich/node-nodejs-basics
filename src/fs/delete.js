import fs from 'fs';

const remove = async () => {
  try {
    if (!fs.existsSync('./files/fileToRemove.txt')) {
      throw new Error('FS operation failed')
    }
    fs.unlinkSync('./files/fileToRemove.txt');
    } catch (err) {
      console.error(err);
    }
};

await remove();