# Marvel Power Levels Api

Express + MongoDB + Marvel API

* Searches the Marvel database for the characters using the [Marvel API](https://developer.marvel.com/)
* Show power levels of popular Marvel characters
* [Data provided by Marvel. © 2016 Marvel](http://marvel.com)

## Getting Started

### Import Mongo Database Collection

* Import power levels data:
```
mongoimport --db marvel --collection powerlevels --type json --file data/powerlevels.json --jsonArray
```

### Add Marvel API Public/Private Keys

* Get Marvel API keys from [https://developer.marvel.com/](https://developer.marvel.com/)
* Add your keys to `server/config.js`

### Dependencies

* Install required dependencies:
```
npm install yarn -g
yarn
```

## Scripts

* Run server (port 3000): `npm start`

TODO:
* Tests
* Cors