
import { Transform } from 'stream';

const transform = async () => {
  const reverseData = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.reverse() + '\n');
      callback();
    }
  });
  
  process.stdin.pipe(reverseData).pipe(process.stdout);

};

await transform();