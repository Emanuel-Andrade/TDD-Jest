const supertest = require('supertest');
const app = require('../src/app');

const request = supertest(app);

describe('Testes de Cadastro', () => {
  test('Deve cadastrar corretamente um usuário', () => {
    const newUser = {
      name: 'Emanuel Andrade', email: 'a@a.com', password: '123123', confirmPassword: '123123',
    };
    return request.post('/user').send(newUser).then((res) => {
      expect(res.body.errors).toEqual(null);
      expect(res.statusCode).toEqual(200);
    });
  });
});
