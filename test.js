const assert = require('assert');
const http = require('http');
const app = require('./index');

const server = app.listen(0, () => {
  const { port } = server.address();
  http.get(`http://localhost:${port}/health`, (res) => {
    let data = '';
    res.on('data', (c) => (data += c));
    res.on('end', () => {
      assert.strictEqual(JSON.parse(data).success, true);
      console.log('test passed');
      server.close();
      process.exit(0);
    });
  }).on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
});
