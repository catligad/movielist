var mysql = require('mysql');
var util = require('util');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'movielist'
})
db.connect();

db.query = util.promisify(db.query);

module.exports = {
  queries:{
    get: async function(req, res) {
      let queryResults = await db.query('select * from Movies');
      return res.json(queryResults);
    },
    post: async function (req, res) {
      let queryResults = await db.query(`insert into Movies (title, watched, toggled) values ('${req.body.title}', '${req.body.watched}', '${req.body.toggled}')`);
      return res.send('message logged');
    }
  }
}