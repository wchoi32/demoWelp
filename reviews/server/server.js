const app = require('./index.js');

const server = app.listen(9003, () => {
  console.log('listening to port 9003');
});

module.exports = server;
