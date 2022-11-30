// n should be received from main thread
import { Transform } from 'stream';

import { workerData, parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.postMessage(nthFibonacci(workerData));
  // const fibonacciOut = new Transform({
  //   transform(chunk, encoding, callback) {
  //     let num = Number(chunk);
  //     // if (typeof num === Number) {
  //       this.push(nthFibonacci(num) + '\n');
  //     // } else {
  //       // this.push('No a number!')
  //     // }
  //     callback();
  //   }
  // });
  
  // process.stdin.pipe(fibonacciOut).pipe(process.stdout);
};

sendResult();