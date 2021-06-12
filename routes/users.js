const router = require('express').Router();
const usersRepo = require('../respositories/users')
 /* GET users listing. */
 router.get('/', async function(req, res, next) {
   res.json(await usersRepo.getAllUsers())
 });
 router.delete('/:id', async function(req, res, next) {
  res.json(await usersRepo.deleteUser(req.params.id))
});

 
 module.exports = router;
