import fs from 'fs';

const read = async () => {
    if (!fs.existsSync('./files/fileToRead.txt')) {
      throw new Error('FS operation failed')
    } else {
      fs.readFile('./files/fileToRead.txt',"utf8" , (err, contents) => {
        console.log(contents);
    })
   
  };
};

await read();