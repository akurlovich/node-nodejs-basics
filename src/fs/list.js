import fs from 'fs';

const list = async () => {
  fs.access('./files', (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fs.readdirSync('./files').forEach(file => {
        console.log(file);
      });
    }
  });

};

await list();