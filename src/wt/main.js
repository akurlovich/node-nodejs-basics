import path from 'path';
import {fileURLToPath} from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const cp = cpus();
  let number  = 10;

  const workersResults = await Promise.allSettled(cp.map(() => {
    return new Promise((res, rej) => {
      const worker = new Worker(__dirname + '/worker.js', {
        workerData: number++
      })
      worker.on('message', msg => res(msg));
      worker.on('error', msg => rej(msg));
    })
  }))

  const result = workersResults.map(({status, value}) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null
  }));

  console.log(result)

  return result;


};

await performCalculations();