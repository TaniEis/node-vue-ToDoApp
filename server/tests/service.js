const ToDoModel = require('./model');

/**
 * Stores a new ToDo into the database.
 * @param {Object} ToDo object to create.
 * @throws {Error} If the ToDo is not provided.
 */
module.exports.create = async (ToDo) => {
    if (!ToDo)
        throw new Error('Missing ToDo');

    await ToDoModel.create(ToDo);
};

/**
 * Retrieves a ToDo by id.
 * @param {String} id of ToDo
*/
module.exports.getById = async (id) => {
    const ToDo = await ToDoModel.findById(id);
    return ToDo;
};