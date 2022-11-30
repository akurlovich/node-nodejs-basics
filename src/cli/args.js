const parseArgs = () => {
  if (process.argv.length < 3) {
    console.log('No arguments!');
    return;
  };
  let argsArray = [];
  for (let i = 2; i < process.argv.length - 1; i++) {
    if (process.argv[i].startsWith('--')) {
      argsArray.push(`${process.argv[i]} is ${process.argv[i + 1]}`)
    }
  }
  console.log(argsArray.join(', '))
};

parseArgs();