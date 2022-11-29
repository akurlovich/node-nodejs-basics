import fs from 'fs';

const create = async () => {
  try {
  if (fs.existsSync('./files/fresh.txt')) {
    throw new Error('FS operation failed')
  } else {
    fs.writeFileSync('./files/fresh.txt', 'I am fresh and young');

  }
  } catch (err) {
    console.error(err);
  }
};

await create();