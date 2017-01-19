const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('Characters', () => {

  describe('GET /api/characters', (done) => {
    it('should return characters with names starting with a and limit of 12', function(done) {
      request(app)
        .get('/api/characters?name=a&limit=12')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body.limit).to.equal(12);
          expect(res.body.results).to.have.length.above(0);
          done();
        });
    });

    it('should return 404 on other endpoints', function(done) {
      request(app)
        .get('/api/characters/spiderman')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(404);
          done();
        });
    });

    it('should return 409 when query strings are missing', function(done) {
      request(app)
        .get('/api/characters')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(409);
          done();
        });
    });
  });

});
