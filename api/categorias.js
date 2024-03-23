const express = require('express');
const router = express.Router();

const CATEGORIAS = [
  {
    "_id": "613be41ddb9c47fb90d20d98",
    "nome": 'Comédia',
    "filmes": [
      {
        "_id": "613be41ddb9c47fb90d20d8e",
        "codigo": "COM01",
        "nome": "Professor Aloprado",
        "ano": 2001,
        "diretor": "Geovani Kolodicz",
        "elenco":"Jim Carray, Amy Addans, James Franco, Nando Moura",
        "img":"../../../assets/professor.jpg",
      },
      {
        "_id": "613be41ddb9c47fb90d20d8e",
        "codigo": "COM02",
        "nome": "Ace Ventura - Um Detetive Animal!",
        "ano": 2001,
        "diretor": "Geovani Kolodicz",
        "elenco":"Jim Carray, Amy Addans, James Franco, Nando Moura",
        "img":"../../../assets/ace.jpg",
      }
    ],
  },
  {
    "_id": "613be41ddb9c47fb90d20d99",
    "nome": 'Drama',
    "filmes": [
      {
        "_id": "613be41ddb9c47fb90d20d8e",
        "codigo": "DRAM01",
        "nome": "Show de Truman",
        "ano": 2001,
        "diretor": "Geovani Kolodicz",
        "elenco":"Jim Carray, Amy Addans, James Franco, Nando Moura",
        "img":"../../../assets/show.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20d8e",
        "codigo": "DRAM02",
        "nome": "A Espera de um Milagre",
        "ano": 2001,
        "diretor": "Geovani Kolodicz",
        "elenco":"Jim Carray, Amy Addans, James Franco, Nando Moura",
        "img":"../../../assets/espera.jpg"
      }
    ],
  },
];

router.get('/', function(req, res, next){
  res.json(CATEGORIAS.map(t => ({
    _id: t._id,
    nome: t.nome
  })));
});

router.get('/:_id', function(req, res, next){
  const _id = req.params._id;
  const categorias = CATEGORIAS.find(t => t._id === _id);
  res.json(categorias);
});

module.exports = router;
