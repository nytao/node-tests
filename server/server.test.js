const supertest = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Servers', () => {

  describe('GET /', () => {
    it('should return hello world', (done) => {
      supertest(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: "Page not found."
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return 200 and include T & K', (done) => {
      supertest(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Tao',
            title: 'Scientist'
          })
        })
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Katherine',
            title: 'Lover'
          });
        })
        .end(done);
    });
  });
});
