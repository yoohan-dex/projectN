import React, {Component, PropTypes} from 'react';
import Contact from './Contact';
import Module from '../../components/Module';
import autobind from 'autobind-decorator';

class Header extends Component {
  @autobind
  renderContact(type) {
    return <Contact type={type} value={this.props.contact[type]}/>;
  }
  checkExist(module) {
    const keys = Object.keys(module);
    let exist;
    keys.forEach(key => {
      if (module[key] !== '' && module[key] !== []) {
        exist = true;
      }
    });
    return exist;
  }
  render() {
    const {width, title, contact} = this.props;
    const mobile = width === 'mobile';
    return (
      <header
        className="header-row"
        style={
        mobile ? {
          margin: '0 0 5px',
          padding: '10px 10px',
        } : {}
      }
        >
        <section
          className="title"
          style={
            mobile ? {
              float: 'none',
              textAlign: 'center',
            } : {}
          }
          >
          <Module
            haveData={this.checkExist(title)}
            type="title"
            position="right"
            styleTemp={mobile ? {} : {
              width: '200px',
              marginBottom: '30px',
            }}
            >
            <h1>{title.name}</h1>
            <h2>{title.jobDescription}</h2>
          </Module>
        </section>
        <address>
          <Module
            haveData={this.checkExist(contact)}
            type="contact"
            position="left"
            styleTemp={mobile ? {} : {
              float: 'left',
              width: '200px',
              marginBottom: '30px',
            }}
            styleForever={mobile ? {} : {
              marginBottom: '30px',
            }}
            >
            <ul
              className="contact"
              style={
            mobile ? {
              float: 'none',
              marginTop: '10px',
              paddingLeft: '5px',
              paddingBottom: '1px',
              textAlign: 'center',
            } : {
              float: 'none',
              paddingBottom: 0,
            }
          }
              >
              {Object.keys(contact).map(this.renderContact)}
            </ul>
          </Module>

        </address>
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
