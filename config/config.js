module.exports = {
  database: process.env.MONGO_URI || 'localhost/marvel',
  publicKey: process.env.MARVEL_API_PUBLIC_KEY || '<MARVEL_API_PUBLIC_KEY>',
  privateKey: process.env.MARVEL_API_PRIVATE_KEY || '<MARVEL_API_PRIVATE_KEY>'
};
