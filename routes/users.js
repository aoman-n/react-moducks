var express = require('express');
var router = express.Router();

let users = [
  {
    id: 1,
    name: 'aoba'
  },
  {
    id: 2,
    name: 'hiroaki'
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users)
});

router.post('/', (req, res, next) => {
  users.push({
    id: users.slice(-1)[0].id + 1,
    name: req.body.name
  });
  res.json(users);
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  users = users.filter(u => u.id !== Number(id));
  res.json(users);
});

module.exports = router;
