const app = require('../app');

const request = require('supertest');

describe('gae_node_request_example', () => {
  describe('GET /helloworld', () => {
    it('should get 200', done => {
      request('http://127.0.0.1:8080')
        .get('/helloworld')
        .expect(200, done);
    });

    it('should get Hello World', done => {
      request('http://127.0.0.1:8080')
        .get('/helloworld')
        .expect('{"data":{"hello":"Hello world!"}}', done);
    });
  });
});
