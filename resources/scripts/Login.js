export default class Login {
  constructor(login, password, button) {
    this.login = document.getElementById(login);
    this.password = document.getElementById(password);
    this.button = document.getElementById(button);
  }

  handleEnter = (e) => {
    e.preventDefault();
    if (login.value === 'admin' && password.value === 'admin') {
      window.location.href = '../../pages/minhasPlantas.html';
    } else if (login.value != 'admin' && password.value === 'admin') {
      window.alert('Login inválido, tente novamente');
    } else if (login.value === 'admin' && password.value != 'admin') {
      window.alert('Senha incorreta, tente novamente');
    } else {
      window.alert('Usuário ou senha não encontrado!');
    }
  };

  init() {
    if (this.login && this.password && this.button) {
      this.button.addEventListener('click', this.handleEnter);
    }
  }
}
