import dotenv from 'dotenv';
dotenv.config();

const env = (key: string, defaultVal: any = undefined) => {
  return process.env[key] || defaultVal;
};

env.require = (key: string) => {
  const value = env(key);
  if (!value) {
    throw new Error(`Environment variable '${key}' is missing!`);
  }

  return value;
};

export default {
  app: { port: env('PORT', 6969) },
  db: { url: env.require('MONGODB_URL') },
};
