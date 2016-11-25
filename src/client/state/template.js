import {observable, autorun, computed, action, asFlat, toJS} from 'mobx';

class Template {
  @observable template = 'default';

  @action updateTemplate(type) {
    this.template = type;
  }
  @computed get getTemplate() {
    return this.template;
  }
}

export default new Template();
