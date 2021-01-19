const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ToDoSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  dueDate: {
    type: String
  },
}, {
  collection: 'ToDos'
})

module.exports = mongoose.model('ToDo', ToDoSchema)