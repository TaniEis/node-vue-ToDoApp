const mongoose = require('mongoose');

const dbHandler = require('./db-handler');
const ToDoIdService = require('./service');
const ToDoIdModel = require('./model');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await dbHandler.connect();
});

/**
 * Seed the database.
 */
beforeEach(async () => {
    await createToDoIds();
});

/**
 * Clear all test data after every test.
 */
afterEach(async () => {
    await dbHandler.clearDatabase();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await dbHandler.closeDatabase();
});

/**
 * ToDoId getById test suite.
 */
describe('ToDoId getById ', () => {
    /**
     * Should return null if getById doesn't find any ToDoId with the provided id.
     */
    it('should return null if nothing is found', async () => {
        await expect(ToDoIdService.getById(mongoose.Types.ObjectId()))
            .resolves
            .toBeNull();
    });

    /**
     * Should return the correct ToDoId if getById finds the ToDoId with the provided id.
     */
    it('should retrieve correct ToDoId if id matches', async () => {
        const foundToDoId = await ToDoIdService.getById(ToDoId);

        expect(foundToDoId.id).toBe(ToDoId);
        expect(foundToDoId.handle).toBe(ToDoId.handle);
    });
});

/**
 * Seed the database with ToDoIds.
 */
const createToDoIds = async () => {
    const createdToDoId = await ToDoIdModel.create(ToDo1);
    ToDoId = createdToDoId.id;
    await ToDoIdModel.create(ToDo2);
};

let ToDoId;

const ToDo1 = {
    title: 'gotta do more workout!',
    description: 'by all mean, running, jumping, squating. just do it!',
    dueDate: '03-01-2021 04:00'
};

const ToDo2 = {
    title: 'read 100 pages a day',
    description: 'I actually love to read!',
    dueDate: '16-02-2021 10:00'
};
