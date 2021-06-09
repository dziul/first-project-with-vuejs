const dotenv = require('dotenv-defaults');
const path = require('path');

const envPath = './environments';
let envFile = '.env';

if (process.env.NODE_ENV) {
  envFile += '.' + process.env.NODE_ENV;
}

const result = dotenv.config({
  path: path.resolve(envPath, envFile),
  defaults: path.resolve(envPath, '.env.defaults'),
});

if (result.error) {
  throw result.error;
}

module.exports = {};
