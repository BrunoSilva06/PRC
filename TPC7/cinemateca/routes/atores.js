var express = require('express');
var router = express.Router();
var Atores = require('../controllers/atores')

router.get('/', async function(req, res, next) {
    await Atores.getLista()
     .then(dados => res.jsonp(dados))
     .catch(e => res.jsonp(e))
  });


router.get('/:id', async function(req, res, next) {
    await Atores.getAtor(req.params.id)
     .then(dados => res.jsonp(dados))
     .catch(e => res.jsonp(e))
});

 
module.exports = router;