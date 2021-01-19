const mongoose = require('mongoose');

/**
 * ToDo model schema.
 */
const ToDoSchema = new mongoose.Schema({
    title:       { type: String, required: true },
    description: { type: String, required: true },
    dueDate:     { type: String, required: true }
}, {
    collection: 'ToDos'
  });

module.exports = mongoose.model('ToDo', ToDoSchema);