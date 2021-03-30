const mysqlHandler = require('./databaseHandler.js')

module.exports = {
  getNotes
}


function getNotes() {
  mysqlHandler.fetchNotes()  
}