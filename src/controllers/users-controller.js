const axios = require('axios');

// List all GitHub users
exports.listUsers = async (req, res) => {
  const { since } = req.body;

  try {
    axios.get(`https://api.github.com/users?since=${since}`)
      .then((response) => {
        const data = JSON.stringify(response.data);
        res.status(200).send(JSON.parse(data));
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

// Get single user details
exports.getUserDetails = async (req, res) => {
  const { username } = req.body;

  try {
    axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: { Authorization: 'Bearer xxxx' },
      },
    )
      .then((response) => {
        const data = JSON.stringify(response.data);
        res.status(200).send(JSON.parse(data));
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

// Get single user repositories
exports.getUserRepos = async (req, res) => {
  const { username } = req.body;

  try {
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        const data = JSON.stringify(response.data);
        res.status(200).send(JSON.parse(data));
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};
