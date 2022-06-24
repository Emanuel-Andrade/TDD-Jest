const supertest = require('supertest');
const app = require('../src/app');

const request = supertest(app);

describe('Checar se o servidor está rodando', () => {
  test('Deve responder status code 200 na porta correta', () => {
    return request.get('/').then((res) => {
      expect(res.body.message).toEqual('ok');
      expect(res.statusCode).toEqual(200);
    });
  });
});
