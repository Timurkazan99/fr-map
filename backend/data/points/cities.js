const cities = [
  {
    id: 1,
    "type": "Feature",
    "properties": {
      "type": "city",
      "name": "Baldurs Gate"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [5.427246, -20.981957]
    }
  },
  {
    id: 2,
    "type": "Feature",
    "properties": {
      "type": "city",
      "name": "Candlekeep"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [1.955566, -30.826781]
    }
  }
];

module.exports = { cities };