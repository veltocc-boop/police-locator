require('dotenv').config();

const env = (key, defaultVal = undefined) => {
  return process.env[key] || defaultVal;
};

env.require = (key) => {
  const value = env(key);
  if (!value) {
    throw new Error(`Environment variable '${key}' is missing!`);
  }
  return value;
};

module.exports = {
  app: { port: env('PORT', 6969) },
  db: { url: env.require('MONGODB_URL') },
};
