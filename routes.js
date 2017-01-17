module.exports = function( app ) {
  app.use('/api/powerlevels', require('./api/powerlevels'));
  app.use('/api/characters', require('./api/characters'));
};
