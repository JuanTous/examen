var express = require('express');
var http = require('http')
var cors = require('cors')
var bodyParser = require('body-parser')

var textsRouter = require('./routes/texts');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req,res) => {
  res.send("main")
});
app.use('/data', textsRouter);

const server = http.createServer(app)

HOST = "localhost"
PORT = 4000

server.listen(PORT, HOST, ()=>{
  console.log(HOST+" "+PORT)
})

module.exports = app;
