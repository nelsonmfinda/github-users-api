const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    title: 'GitHub User Repos API',
    version: '1.0.0',
  });
});

// router.get('/api/users/:username/details', (req, res) => {
//   res.send(req.params);
// });

// router.get('/api/users/:username/repos', (req, res) => {
//   res.send(req.params);
// });

module.exports = router;
