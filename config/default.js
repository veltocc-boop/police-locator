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
  // Always use Fly.io's injected PORT
  app: { port: env('PORT', 3000) },

  // Your MongoDB URL stays the same
  db: { url: env.require('MONGODB_URL') },
};
