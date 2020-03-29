var express = require('express');
var router = express.Router();
var Personagens = require('../controllers/personagens')

router.get('/', async function(req, res, next) {
    await Personagens.getLista()
     .then(dados => res.jsonp(dados))
     .catch(e => res.jsonp(e))
  });

  router.get('/:id', async function(req, res, next) {
    await Personagens.getPersonagem(req.params.id)
     .then(dados => res.jsonp(dados))
     .catch(e => res.jsonp(e))
  });


  module.exports = router;