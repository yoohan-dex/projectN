import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';

@observer(['UIstate'])
class Article extends Component {
  render() {
    const {children, UIstate} = this.props;
    return (
      <article
        className="col-6 first col"
        style={UIstate.getDeviceWidth === 'mobile' ? {
          width: '100%',
          'paddingRight': 0,
        } : {}}
        >
        {children}
      </article>
    );
  }
}

Article.propTypes = {

};

export default Article;
