import React, {Component, PropTypes} from 'react';

class PositionController extends Component {
  // componentDidMount() {
  //   this.context.forward();
  // }
  // componentWillUpdate() {
  //   if (!this.props.matched) {
  //     this.context.backward();
  //   }
  // }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

PositionController.propTypes = {
  matched: PropTypes.bool,
  children: PropTypes.node,
};

PositionController.contextTypes = {
  forward: PropTypes.func,
  backward: PropTypes.func,
};

export default PositionController;
