class Auth {
  set(auth) {
    const data = JSON.stringify(auth);
    localStorage.setItem('auth', data);
  }

  get() {
    const data = localStorage.getItem('auth');
    try {
      return JSON.parse(data) || null;
    } catch (error) {
      localStorage.removeItem('auth');
    }
    return null;
  }

  remove() {
    localStorage.removeItem('auth');
    localStorage.removeItem('anonymous');
  }

  token() {
    const data = this.get() || {};
    return data.token;
  }

  userId() {
    const data = this.get() || {};
    return data.userId;
  }

  anonymousId() {
    try {
      const anonymous = JSON.parse(localStorage.getItem('anonymous'));
      return anonymous.id;
    } catch (error) {
      // code...
    }
    const id = Math.random()
      .toString(36)
      .substr(3);
    localStorage.setItem('anonymous', JSON.stringify({ id }));
    return id;
  }
}

export default new Auth();
