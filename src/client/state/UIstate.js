import {observable, autorun, computed, action, asFlat, toJS} from 'mobx';

class UIstate {
  constructor() {
    autorun(() => {
      console.log(this.getMobile);
      console.log(this.position);
      console.log(this.big);
      if (this.position === 'right' && this.big && this.getMobile) {
        this.updateDialogLeft(70);
      } else if (this.position === 'right' && !this.big && this.getMobile) {
        this.updateDialogLeft(78);
      } else if (this.position === 'right' && this.big && !this.getMobile) {
        this.updateDialogLeft(30);
      } else if (this.position === 'right' && !this.big && !this.getMobile) {
        this.updateDialogLeft(22);
      } else if (this.position === 'left' && this.big) {
        this.updateDialogLeft(70);
      } else if (this.position === 'left' && !this.big) {
        this.updateDialogLeft(78);
      }
      if (!this.editting) {
        this.updateDialogLeft(-50);
        this.toCenter();
      }
    });
  }
  @observable big = window.innerWidth > 1566;
  @observable deviceWidth = 1030;
  @observable position = 'center';
  @observable editting = false;
  @observable dialog = {
    top: 0,
    left: -50,
  }
  @action toPC() {
    this.deviceWidth = 1030;
  }
  @action toTablet() {
    this.deviceWidth = 770;
  }
  @action toMobile() {
    this.deviceWidth = 400;
  }

  @action toLeft() {
    this.position = 'left';
  }
  @action toRight() {
    this.position = 'right';
  }
  @action toCenter() {
    this.position = 'center';
  }
  @action startEditting() {
    this.editting = true;
  }
  @action stopEditting() {
    this.editting = false;
  }

  @action updateDialogTop(t) {
    this.dialog.top = t;
  }
  @action updateDialogLeft(l) {
    this.dialog.left = l;
  }
  @computed get getDeviceWidth() {
    switch (this.deviceWidth) {
      case 1030:
        return 'pc';
      case 770:
        return 'tablet';
      case 400:
        return 'mobile';
      default:
        return '';
    }
  }
  @computed get getMobile() {
    return this.deviceWidth === 400;
  }
  @computed get getResumeTransform() {
    switch (this.position) {
      case 'center':
        return 'translate3d(0, 0, 0) rotateY(0)';
      case 'right':
        return this.getDeviceWidth === 'mobile' ?
        'translate3d(-200px, 0, 0) rotateY(-5deg)' :
        'translate3d(0, 0, -100px) rotateY(-30deg)';
      case 'left':
        return this.getDeviceWidth === 'mobile' ?
        'translate3d(-200px, 0, 0) rotateY(-5deg)' :
        'translate3d(0, 0, -100px) rotateY(30deg)';
      default:
        return '';
    }
  }
}

export default new UIstate();
