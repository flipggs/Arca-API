const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const config = require('./config')

app.use(express.static("public"));


app.get('/', (req, res) => {
  res.redirect('/apidoc');
});

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
});

/**
 * @api {get} /signin Singin
 * @apiGroup Sistema
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Logado!"
 *    }
 *
 */
app.get("/signin", function (req, res) {

});










app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})