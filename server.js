const express = require('express')
const app = express()
const port = 3000

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://admin:admin123@localhost:5432/pruebas");

app.use(express.json());

app.get('/:id', (req, res) => {
  db.one(`SELECT * from informacionusuario where id_usuario='${req.params.id}'`)
  .then(function (data) {
      res.json(data);
  })
  .catch(function (error) {
      res.json(error);
  });
})

app.get('/', (req, res) => {
  db.query(`SELECT * from informacionusuario`)
  .then(function (data) {
      res.json(data);

  })
  .catch(function (error) {
      res.json(error);
  });
})

app.post('/', (req, res) => {
  const {nombre,apellido,correo} = req.body;
  db.query(`insert into informacionusuario values ((select count(*) from informacionusuario)+1,'${nombre}','${apellido}','${correo}')`)
  .then(function (data) {
      res.json(data);
  })
  .catch(function (error) {
      res.json(error);
  });
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})