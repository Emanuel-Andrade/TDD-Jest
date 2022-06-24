const supertest = require('supertest');

const request = supertest('google.com.br');
test('Deve responder status code 200 na porta correta', async () => {
  const response = await request.get('/');
  expect(response.statusCode).toEqual(301);
});
