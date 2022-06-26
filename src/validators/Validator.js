const bcrypt = require('bcryptjs');
const User = require('../models/Users');

class Validate {
  isEmail(email) {
    const res = /\S+@\S+\.\S+/;
    return res.test(email);
  }

  async createUser(name, email, password, confirmPassword) {
    try {
      if (!name || name === ' ') return { errors: ['Campo nome é obrigatorio'] };
      if (!email || email === ' ') return { errors: ['Campo email é obrigatorio'] };
      const thisEmailExist = await User.find({ email });
      if (thisEmailExist.length > 0) return { errors: ['Email já cadastrado'] };
      if (!password || password === ' ') return { errors: ['Campo senha é obrigatorio'] };
      if (!confirmPassword || confirmPassword === ' ') return { errors: ['Campo confirmação de senha é obrigatorio'] };
      if (password !== confirmPassword) return { errors: ['Senhas diferentes'] };
      if (password.length < 6) return { errors: ['Senha deve conter pelo menos seis caracteres'] };
      return { errors: null };
    } catch (error) {
      return { errors: error.message };
    }
  }

  async loginUser(email, password) {
    try {
      if (!email || email === ' ') return { errors: ['Campo email é obrigatorio'] };
      const thisEmailExist = await User.find({ email });
      if (thisEmailExist.length == 0) return { errors: ['Email não cadastrado'] };
      if (!password || password === ' ') return { errors: ['Campo senha é obrigatorio'] };
      if (password.length < 6) return { errors: ['Senha deve conter pelo menos seis caracteres'] };
      if (!bcrypt.compareSync(password, thisEmailExist[0].password)) return { errors: ['Senha incorreta'] };
      return thisEmailExist;
    } catch (error) {
      return { errors: error.message };
    }
  }

  createHash(password) {
    const hash = bcrypt.hashSync(password, 8);
    return hash;
  }
}

module.exports = new Validate();
