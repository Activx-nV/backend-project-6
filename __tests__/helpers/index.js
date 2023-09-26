// @ts-check

import { URL } from 'url';
import fs from 'fs';
import path from 'path';
import {
  generateUsers, generateStatuses, generateTasks, generateLabels, generateTasksLabels,
} from './generateFakeMockData.js';

// TODO: использовать для фикстур https://github.com/viglucci/simple-knex-fixtures

const getFixturePath = (filename) => path.join('..', '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(new URL(getFixturePath(filename), import.meta.url), 'utf-8').trim();
const getFixtureData = (filename) => JSON.parse(readFixture(filename));

const getTestData = () => getFixtureData('testData.json');

const prepareData = async (app) => {
  const { knex } = app.objection;

  // получаем данные из фикстур и заполняем БД
  await knex('users').insert(getFixtureData('users.json'));
};

const logInToSession = async (app, logInDetails) => {
  const response = await app.inject({
    method: 'POST',
    url: app.reverse('session'),
    payload: {
      data: logInDetails,
    },
  });

  const [sessionCookie] = response.cookies;
  const { name, value } = sessionCookie;
  const cookie = { [name]: value };

  return cookie;
};

const prepareFakeData = async (app) => {
  const { knex } = app.objection;
  const mockUsers = generateUsers();
  const mockStatuses = generateStatuses();
  const mockLabels = generateLabels();

  await knex('users').insert(mockUsers.seeds);
  await knex('statuses').insert(mockStatuses.seeds);
  await knex('labels').insert(mockLabels.seeds);

  const users = await knex('users');
  const statuses = await knex('statuses');
  const mockTasks = generateTasks(users, statuses);

  await knex('tasks').insert(mockTasks.seeds);

  const tasks = await knex('tasks');
  const labels = await knex('labels');
  const mockTasksLabels = generateTasksLabels(tasks, labels);

  await knex('tasks_labels').insert(mockTasksLabels.seeds);
  return {
    users: mockUsers,
    statuses: mockStatuses,
    tasks: mockTasks,
    labels: mockLabels,
  };
};

export {
  getTestData, prepareData, prepareFakeData, logInToSession,
};
