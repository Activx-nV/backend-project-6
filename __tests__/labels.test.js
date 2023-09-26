import fastify from 'fastify';
import init from '../server/plugin.js';
import { prepareFakeData, logInToSession } from './helpers/index.js';

describe('Labels CRUD', () => {
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

    mockData = await prepareFakeData(app);
    cookie = await logInToSession(app, mockData.users.existing.executor);
  });

  it('index', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('labels'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('newLabel', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('newLabel'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('createLabel', async () => {
    const params = mockData.labels.new;
    const response = await app.inject({
      method: 'POST',
      url: app.reverse('labels'),
      payload: {
        data: params,
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);

    const label = await models.label.query().findOne({ name: params.name });
    expect(label).toMatchObject(params);
  });

  it('updateLabel', async () => {
    const updatedLabelName = 'updatedLabel';
    const params = mockData.labels.existing.update;

    const label = await models.label.query().findOne({ name: params.name });

    const response = await app.inject({
      method: 'PATCH',
      url: app.reverse('updateLabel', { id: label.id }),
      payload: {
        data: {
          name: updatedLabelName,
        },
      },
      cookies: cookie,
    });
    expect(response.statusCode).toBe(302);

    const updatedLabel = await label.$query();
    expect(updatedLabel.name).toEqual(updatedLabelName);
  });

  it('deleteLabel', async () => {
    const params = mockData.labels.existing.delete;

    const label = await models.label.query().findOne({ name: params.name });
    const response = await app.inject({
      method: 'DELETE',
      url: app.reverse('deleteLabel', { id: label.id }),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);

    const deletedLabel = await models.label.query().findById(label.id);
    expect(deletedLabel).toBeUndefined();
  });

  afterAll(async () => {
    await app.close();
  });
});
