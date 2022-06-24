const supertest = require('supertest');
const app = require('../src/app');
const mongoConnection = require('../src/database/connection');

const request = supertest(app);

describe('Checar se o servidor está rodando', () => {
  test('Deve responder status code 200 na porta correta', () => {
    return request.get('/').then((res) => {
      expect(res.body.message).toEqual('ok');
      expect(res.statusCode).toEqual(200);
    });
  });
});

describe('Checar se a conexão com banco de dados foi feita', () => {
  test('Deve receber connected como true', async () => {
    return mongoConnection().then((res) => expect(res.connected).toEqual(true));
  });
});
