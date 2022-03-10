const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {

if (req.isAuthenticated()) {
    const queryText = `SELECT * FROM "item";`;
    pool.query(queryText)
    .then((result) => {
      res.send(result.rows)
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
  } else {
      res.sendStatus(403);
  }
});

router.post('/', (req, res) => {
  const description = req.body.description;
  const image_url = req.body.image;
  const user_id = req.body.userId;

  const queryText = `INSERT INTO "item" (description, image_url, user_id)
    VALUES ($1, $2, $3)`;
  pool
    .query(queryText, [description, image_url, user_id ])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Item Post failed: ', err);
      res.sendStatus(500);
    });
});



/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
