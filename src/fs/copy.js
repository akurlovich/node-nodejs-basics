import fs from 'fs';

const copy = async () => {
  try {
    fs.access('./files', (err) => {
      if (err) {
        throw new Error('FS operation failed');
      } 
    fs.access('./files_copy', (err) => {
      if (!err) {
        throw new Error('FS operation failed');

      }
    })

    fs.cpSync('./files', './files_copy', {recursive: true});
  
    })
  } catch (error) {
    
  }
};

await copy();