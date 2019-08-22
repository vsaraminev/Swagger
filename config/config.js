module.exports = {
  development: {
    port: process.env.PORT || 5000,
    dbPath: process.env.DB_PATH || 'mongodb://localhost:27017/tuning-system'
  },
  production: {}
};