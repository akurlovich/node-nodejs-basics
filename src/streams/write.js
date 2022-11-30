import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const writableStream = fs.createWriteStream(__dirname + '/files/fileToWrite.txt', 'UTF-8');
  process.stdin.on("data", (data) => {
    writableStream.write(data);
  });
  process.stdin.on("end", () => {
    writableStream.end();
  });
};

await write();