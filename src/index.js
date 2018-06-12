/*
 * @Author: kerim selmi 
 * @Date: 2018-06-12 17:38:22 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-12 18:20:58
 */

import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class DoubleClick extends Component {
  constructor() {
    super();
    this.state = {lastPress: 0};
  }

  
  onPress = () => {
    let delta = new Date().getTime() - this.state.lastPress;
    if(delta < 200) {
      // double click happend
      this.props.onClick()
    }
    this.setState({
      lastPress: new Date().getTime()
    })
  }  

  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.onPress} >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

DoubleClick.defaultProps = {
    onClick: () => Alert.alert('Double Click Succeed'),
};
  
DoubleClick.propTypes = {
    onClick: PropTypes.func,
};
  
module.exports = DoubleClick;
