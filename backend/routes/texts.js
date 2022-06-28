var express = require('express');
var router = express.Router();


var texts = []
/* GET users listing. */
router.route('/')
.get((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.json(texts);
})
.post((req,res) => {
  texts.push(req.body.text)
  res.setHeader('Content-type', 'application/json')
  res.json({"status":"saved"});
})

module.exports = router;
