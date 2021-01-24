console.log('process.env.DATABASEE_URL :>> ', process.env.API_ROUTE_AUTHENTICATE);
module.exports = {
  "type": "postgres",
  "url": process.env.API_ROUTE_AUTHENTICATE,
  "entities": [
    "dist/models/**/*.js"
 ],
 "migrations": [
  "dist/database/migrations/**/*.js"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}
