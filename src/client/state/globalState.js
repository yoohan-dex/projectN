import {observable, autorun, action, asFlat, toJS} from 'mobx';

export const defaultState = observable({
  app: {
    title: 'LinkWo->',
    statusCode: 200,
    hostname: 'localhost',
  },
});

class Global {
  @observable loginState = false;
  @observable username = undefined;

  constructor() {
    autorun(() => console.log(this.loginState));
  }
  @action login(token, username) {
    localStorage.setItem('token', token);
    this.loginState = true;
    this.username = username;
  }
}

export default new Global();
