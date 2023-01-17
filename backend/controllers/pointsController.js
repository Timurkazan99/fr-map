const {cities} = require("../data/points/cities");
const {woods} = require("../data/points/woods");

class pointsController {
  async getAll(req, res, next) {
    try {
      const points = {
        "type": "FeatureCollection",
        "features": [...cities, ...woods],
      }
      return res.json(points);
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new pointsController();