var dir = './lib/';
if (process.env._COVERAGE){
  dir = './lib-cov/';
}
module.exports = require(dir + 'onBodyMiddleware');
