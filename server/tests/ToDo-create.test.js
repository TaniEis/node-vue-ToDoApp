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
 * ToDoId create test suite.
 */
describe('ToDoId create ', () => {
    /**
     * Tests that a valid ToDoId can be created through the ToDoIdService without throwing any errors.
     */
    it('can be created correctly without throwing any errors', async () => {
        expect(async () => {
            await ToDoIdService.create(ToDoIdComplete);
        })
            .not
            .toThrow();
    });

    /**
     * Should throw an error when ToDoId is missing args.
     */
    it('requires handle + location + ToDoId', async () => {
        await expect(ToDoIdService.create(ToDoIdMissingTitle))
            .rejects
            .toThrow(mongoose.Error.ValidationError);

        await expect(ToDoIdService.create(ToDoIdMissingDescription))
            .rejects
            .toThrow(mongoose.Error.ValidationError);

        await expect(ToDoIdService.create(ToDoIdMissingDueDate))
            .rejects
            .toThrow(mongoose.Error.ValidationError);
    });

    /**
     * ToDoId should exist after being created.
     */
    it('exists after being created', async () => {
        await ToDoIdService.create(ToDoIdComplete);

        const createdToDoId = await ToDoIdModel.findOne();

        expect(createdToDoId.handle)
            .toBe(ToDoIdComplete.handle);
    });

});

const ToDoIdComplete = {
    title: 'gotta do more workout!',
    description: 'by all mean, running, jumping, squating. just do it!',
    dueDate: '03-01-2021 04:00'
};

const ToDoIdMissingTitle = {
    description: 'by all mean, running, jumping, squating. just do it!',
    dueDate: '03-01-2021 04:00'
};

const ToDoIdMissingDescription = {
    title: 'gotta do more workout!',
    dueDate: '03-01-2021 04:00'
};

const ToDoIdMissingDueDate = {
    title: 'gotta do more workout!',
    description: 'by all mean, running, jumping, squating. just do it!'
};