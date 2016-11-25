import React, {Component, PropTypes} from 'react';
import autobind from 'autobind-decorator';
class Fade extends Component {
  constructor({matched}) {
    super();
    this.state = {
      match: matched,
    };
  }
  componentDidMount() {
    console.log('I have been mounted!!!!');
    this.props.fore();
  }
  @autobind
  fadeout() {
    console.log('I am fading out!!');
    this.setState({
      match: this.props.matched,
    }, this.props.back());
  }
  render() {
    const {children, back, matched} = this.props;
    return (
      <div>
        {children}
        {!matched && this.state.match ? this.fadeout() : null}
      </div>
    );
  }
}

Fade.propTypes = {

};

export default Fade;
