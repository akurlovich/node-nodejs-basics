import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  if (args === undefined) {
    args = '--writeSomethingToConsole';
  };

  const childProcess = spawn('node', [`${__dirname}/files/script.js`, ...args.split(' ')]);

  process.stdin.on('data', (msg) => {
    childProcess.stdin.write(msg);
  });

  childProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });
};

spawnChildProcess('--arg1 --arg2 --arg3');