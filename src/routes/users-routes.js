const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users-controller');

router.get('/api/users', usersController.listUsers);
router.get('/api/users/:username/details', usersController.getUserDetails);
router.get('/api/users/:username/repos', usersController.getUserRepos);

module.exports = router;
