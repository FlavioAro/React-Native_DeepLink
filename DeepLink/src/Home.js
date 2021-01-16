import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
        <View>
            <TouchableOpacity title="press" onPress={() => 
            this.props.navigation.navigate('Login', {
                id: 0,
            })} >
                <Text>Clique Aqui</Text>
            </TouchableOpacity>
        </View>
    )
  }
}
export default Home;