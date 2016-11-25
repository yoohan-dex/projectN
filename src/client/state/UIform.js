import {observable, autorun, computed, action, asFlat, toJS} from 'mobx';

class UIform {
  @observable page = {
    education: {
      count: 0,
      children: [{
        honor: 0,
        description: 0,
      }],
    },
    project: {
      count: 0,
      children: [{
        description: 0,
      }],
    },
    language: {
      count: 0,
      children: [{
        certifications: 0,
        description: 0,
      }],
    },
    experience: {
      count: 0,
      children: [{
        description: 0,
      }],
    },
    skill: {
      count: 0,
      children: [{
        brief: 0,
        description: 0,
      }],
    },
  }
  @action updateCount(module, pageCount, key, up) {
    if (up) {
      this.page[module].children[pageCount][key]++;
    } else if (!up && this.page[module].children[pageCount][key] > 0) {
      this.page[module].children[pageCount][key]--;
    }
  }
  @action initialChildrenCount(module, pageCount, key) {
    this.page[module].children[pageCount] = Object.assign({},
    this.page[module].children[pageCount],
    {[key]: 0}
    );
  }
  @observable title = {
    inputType: 'text',
    form: [{
      type: 'name',
      placeholder: '请输入你的姓名',
    }, {
      type: 'jobDescription',
      placeholder: '请输入你的职位介绍',
    }],
  }

  @observable contact = {
    inputType: 'text',
    form: [{
      type: 'email',
      placeholder: '请输入你的电子邮箱',
    }, {
      type: 'wechat',
      placeholder: '请输入你的微信账号',
    }, {
      type: 'github',
      placeholder: '请输入你的github账号',
    }, {
      type: 'blog',
      placeholder: '请输入你的博客地址',
    }, {
      type: 'phone',
      placeholder: '请输入你的手机号码',
    }, {
      type: 'weibo',
      placeholder: '请输入你的微博名称',
    }],
  }
  @observable education = {
    school: '请输入你就读的学校',
    major: '请输入你所学的专业',
    start: '请输入入学时间',
    end: '请输入毕业时间',
    children: {
      honor: '请输入你在学校获得的荣誉',
      description: '请描述你在学校的情况',
    },
  }
  @observable project = {
    ch: '请输入你做过的项目的中文名',
    en: '请输入你做过的项目的英文名',
    demo: '请输入你这个项目的演示链接',
    source: '请输入你这个项目的源码链接',
    children: {
      description: '请输入你这个项目的具体描述',
    },
  }
  @observable experience = {
    place: '请输入你工作经历的地点',
    ch: '请输入工作经历的技术类型的中文名称',
    en: '请输入工作经历的技术类型的英文名称',
    start: '请输入工作经历的开始时间',
    end: '请输入工作经历的结束时间',
    children: {
      description: '请输入对工作经历的详细描述',
    },
  }
  @observable skill = {
    ch: '请输入你熟练的技能技术中文名称',
    en: '请输入你熟练的技能技术英文名称',
    children: {
      brief: '请输入该技能技术的关键词',
      description: '详细描述你对技能技术的掌握情况',
    },
  }
  @observable language = {
    type: '请输入掌握外语的考试证书',
    full: '请输入满分',
    score: '请输入你所得总分',
    children: {
      description: '请详细描述你对该外语的掌握情况',
    },
  }

  @action increasePage(module) {
    this.page[module].count ++;
  }
  @action decreasePage(module) {
    if (this.page[module].count > 0) {
      this.page[module].count --;
    }
  }
}

export default new UIform();
