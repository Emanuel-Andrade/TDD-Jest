const supertest = require('supertest');
const app = require('../src/app');

const request = supertest(app);

const newUser = {
  name: 'Emanuel Andrade', email: 'a@a.com', password: '123123', confirmPassword: '123123',
};

describe('Testes de usuário', () => {
  // Create Main
  /* test('Deve cadastrar corretamente um usuário', () => {
    return request.post('/user').send(newUser).then((res) => {
      expect(res.body.errors).toEqual(null);
      expect(res.statusCode).toEqual(200);
    });
  });
*/
  test('Deve logar o usuário com sucesso', () => {
    return request.post('/login').send(newUser).then((res) => {
      expect(res.body.errors).toEqual(null);
      expect(res.statusCode).toEqual(200);
    });
  });
});
