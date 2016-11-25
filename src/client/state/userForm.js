import {observable, autorun, computed, action, asFlat, toJS} from 'mobx';

class UserForm {
  constructor() {
    autorun(() => console.log(this.education[0].school));
  }
  @observable tempValue;
  @observable edittingModule = '';


  @observable title = {
    name: '',
    jobDescription: '',
  };
  @observable contact = {
    email: '',
    wechat: '',
    github: '',
    blog: '',
    phone: '',
    weibo: '',
  };

  @observable education = [{
    school: '',
    major: '',
    start: '',
    end: '',
    honor: [''],
    description: [''],
  }]

  @observable project = [{
    ch: '',
    en: '',
    demo: '',
    source: '',
    description: [''],
  }]
  @observable experience = [{
    place: '',
    ch: '',
    en: '',
    start: '',
    end: '',
    description: [''],
  }]
  @action initialArray(module, pageCount, key) {
    this[module][pageCount][key].push('');
  }
  @action initialModule(module, pageCount, key, children) {
    if (children) {
      this[module][pageCount] = Object.assign({},
      this[module][pageCount],
      {[key]: ['']});
    } else {
      this[module][pageCount] = Object.assign({},
      this[module][pageCount],
      {[key]: ''});
    }
  }
  @computed get getEducation() {
    return toJS(this.education);
  }
  @computed get getProject() {
    return toJS(this.project);
  }
  @computed get getLanguage() {
    return toJS(this.language);
  }
  @computed get getSkill() {
    return toJS(this.skill);
  }
  @computed get getExperience() {
    return toJS(this.experience);
  }
  @observable skill = [{
    ch: '',
    en: '',
    brief: [''],
    description: [''],
  }]
  @observable language = [{
    type: '',
    full: '',
    score: '',
    description: [''],
  }]

  @action setValue(module, pageCount, key, value, count) {
    if (count !== undefined) {
      this[module][pageCount][key][count] = value;
    } else {
      this[module][pageCount][key] = value;
    }
  }
  @action setSimpleValue(module, type, value) {
    this[module][type] = value;
  }
  // @action getValue(module, pageCount, key, count) {
  //   return this[module][pageCount][key];
  // }

  @action setTempValue(v) {
    this.tempValue = v;
  }

  @computed get getTitle() {
    return {
      name: this.title.name,
      jobDescription: this.title.jobDescription,
    };
  }
  @computed get getContact() {
    return {
      email: this.contact.email,
      wechat: this.contact.wechat,
      github: this.contact.github,
      blog: this.contact.blog,
      phone: this.contact.phone,
      weibo: this.contact.weibo,
    };
  }




  @computed get getTempValue() {
    return this.tempValue;
  }

  @action resetEdittingMoudle() {
    this.edittingModule = '';
  }

  @action updateEdittingModule(type) {
    this.edittingModule = type;
  }


}

export default new UserForm();
