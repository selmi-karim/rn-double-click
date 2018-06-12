# rn-double-click

A Component for Double Click based on <a href="https://facebook.github.io/react-native/docs/touchableopacity.html">TouchableOpacity</a>  Wrapper.

Build for React Native App and works on both Android and iOS.

<img src="screenshots/test.gif"  />

# Installation

```bash

npm install --save rn-double-click

or 

yarn install rn-double-click

```

# Running the tests

you need to install 
<a href="https://facebook.github.io/jest/docs/en/22.1/getting-started.html">jest</a> 

```bash

npm test

or 

yarn test

```

## Usage
```js
/*
 * @Author: kerim selmi 
 * @Date: 2018-06-12 17:38:18 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-12 18:45:33
 */
import React from 'react';
import { StyleSheet, Text, Alert } from 'react-native'
import DoubleClick from 'rn-double-click'

export default class App extends React.Component {

  dbclick() {
    Alert.alert('Double Click Succeed');
  }

  render() {
    return (
      <DoubleClick style={styles.container} onClick={this.dbclick}>
        <Text>ClickMe</Text>
      </DoubleClick>
    );
  }
}



```

# Author

kerim selmi <a href="http://www.karimation.com">karimation</a>

# License

This project is licensed under the  <a href="LICENSE">MIT License</a>
