const mysql = require('mysql');

class DbHandler {

  static fetchNotes() {
    const connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'zkuser',
      password : 'zkpass',
      database : 'zettelkasten'
    });
    
    // connection.connect();
    
    connection.connect(function(err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log('connected as id ' + connection.threadId);
    })
    
    connection.query('SELECT * FROM test', function (error, results, fields) {
      if (error) console.log(error);
      console.log('Result: ', results);
      connection.end()
    });
  }

}

module.exports = DbHandler;