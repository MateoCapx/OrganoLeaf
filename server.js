const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express.static()  for Javascriptfile

app.use(routes);

// sync sequelize models to the database, then turn on the server
// Sequelize.sync({ force: false }).then(result =>{
//   console.log(result);
// }).catch(err => {
//   console.log(err)
// })


sequelize.sync({ force : false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})