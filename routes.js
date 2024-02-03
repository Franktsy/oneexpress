const express = require('express');
const path = require('path');
const router = express.Router();

// Define your routes
router.get('/', function(req, res){
  if (pools.length > 0 && pools.every(pool => pool !== undefined)) {
     res.sendFile(path.join(__dirname, 'public', 'index.html'));
   } else {
     res.send('Failed to connect to the MySQL database.');
   }
});

router.get('/about', function(req, res){
  res.send("hello");
});

module.exports = router;
