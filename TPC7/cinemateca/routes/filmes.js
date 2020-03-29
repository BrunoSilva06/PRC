var express = require('express');
var router = express.Router();
var Filmes = require('../controllers/filmes')

/* GET home page. */
router.get('/', async function(req, res, next) {
  await Filmes.getLista()
   .then(dados => res.jsonp(dados))
   .catch(e => res.jsonp(e))
});

router.get('/:id', async function(req, res, next) {
  await Filmes.getFilme(req.params.id)
   .then(dados => res.jsonp(dados))
   .catch(e => res.jsonp(e))
});

module.exports = router;
