const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('PowerLevels', () => {

  describe('GET /api/powerlevels', (done) => {
    it('should return powerlevels data', function(done) {
      request(app)
        .get('/api/powerlevels')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.length.above(0);
          done();
        });
    });

    it('should return 404 on other endpoints', function(done) {
      request(app)
        .get('/api/powerlevels/spiderman')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(404);
          done();
        });
    });
  });

});
