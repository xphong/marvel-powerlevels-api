# Marvel Power Levels Api

Express + MongoDB + Marvel API

* Searches the Marvel database for the characters using the [Marvel API](https://developer.marvel.com/)
* Show power levels of popular Marvel characters
* [Data provided by Marvel. © Marvel](http://marvel.com)

## Getting Started

### Import Mongo Database Collection

* Import power levels data:
```
mongoimport --db marvel --collection powerlevels --type json --file data/powerlevels.json --jsonArray
```

### Add Marvel API Public/Private Keys

* Get Marvel API keys from [https://developer.marvel.com/](https://developer.marvel.com/)
* Add your keys to `config/config.js`

### Dependencies

* Install required dependencies:
```
npm install yarn -g
yarn
```

## Scripts

* Have Mongo running: `mongod`
* Run server (port 8080): `npm start`
* Run tests: `npm test`

## API

### GET /characters?name={name}&limit={limit}

* Returns marvel characters that start with {name} and {limit} number of results

### GET /powerlevels

* Returns marvel characters with power levels for intelligence, strength, speed, durability, energy projection, and fighting ability.
