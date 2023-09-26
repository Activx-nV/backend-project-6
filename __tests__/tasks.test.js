import fastify from 'fastify';
import init from '../server/plugin.js';
import { prepareFakeData, logInToSession } from './helpers/index.js';

describe('Tasks CRUD', () => {
  let app;
  let knex;
  let models;
  let mockData;
  let cookie;

  beforeAll(async () => {
    app = fastify({
      exposeHeadRoutes: false,
      logger: { target: 'pino-pretty' },
    });
    await init(app);
    knex = app.objection.knex;
    models = app.objection.models;
    await knex.migrate.latest();
  });

  beforeEach(async () => {
    mockData = await prepareFakeData(app);
    cookie = await logInToSession(app, mockData.users.existing.creator);
  });

  it('index', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('tasks'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('newTask', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('newTask'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('showTask', async () => {
    const params = mockData.tasks.existing;
    const task = await models.task.query().findOne({ name: params.name });
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('specificTask', { id: task.id }),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('createTask', async () => {
    const params = mockData.tasks.new;
    const response = await app.inject({
      method: 'POST',
      url: app.reverse('tasks'),
      payload: {
        data: params,
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);

    const task = await models.task.query().findOne({ name: params.name });
    expect(task).toMatchObject(params);
  });

  it('updateTask', async () => {
    const updatedTaskName = 'updatedTaskName';
    const params = mockData.tasks.existing;
    const task = await models.task.query().findOne({ name: params.name });
    const response = await app.inject({
      method: 'PATCH',
      url: app.reverse('updateTask', { id: task.id }),
      payload: {
        data: {
          ...params,
          name: updatedTaskName,
        },
      },
      cookies: cookie,
    });
    expect(response.statusCode).toBe(302);

    const updatedTask = await task.$query();
    expect(updatedTask.name).toEqual(updatedTaskName);
  });

  it('deleteTask', async () => {
    const params = mockData.tasks.existing;
    const task = await models.task.query().findOne({ name: params.name });
    const response = await app.inject({
      method: 'DELETE',
      url: app.reverse('deleteTask', { id: task.id }),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);

    const deletedTask = await models.task.query().findById(task.id);
    expect(deletedTask).toBeUndefined();
  });

  afterEach(async () => {
    await knex('users').truncate();
    await knex('statuses').truncate();
    await knex('labels').truncate();
    await knex('tasks').truncate();
    await knex('tasks_labels').truncate();
  });

  afterAll(async () => {
    await app.close();
  });
});
