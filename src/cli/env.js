const parseEnv = () => {
  const envParse = Object.entries(process.env).reduce((acc, [key, value]) => {
    if (key.startsWith('RSS_')) {
      acc.push(`${key}=${value}`);
    }
    return acc;
  }, [])
  console.log(envParse.join('; '));
};

parseEnv();