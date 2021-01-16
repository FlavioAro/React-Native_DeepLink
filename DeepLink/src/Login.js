import React from 'react';
import { Text, View } from 'react-native';

class Login extends React.Component {
    
  static navigationOptions = {
    title: 'Login',
  };

  render() {

// Inicio DeepLink //
const renderText = () => {
    let text = ''
    if (this.props.route.params) {
        text = this.props.route.params.param
    }
    return <Text>{text}</Text>
}
// Fim DeepLink //

return (
      <View>
        <Text>{renderText()}</Text>
      </View>
    )
  }
}

export default Login;