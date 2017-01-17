const PowerLevels = require('./powerlevels.model');

/**
 * GET /powerlevels
 * Returns power levels.
 */
exports.get = (req, res) => {
  try {
    PowerLevels.find({}, (err, powerlevels) => {
      res.send(powerlevels);  
    });    
  } catch (e) {
    res.status(500).send({ message: e });
  }
};
