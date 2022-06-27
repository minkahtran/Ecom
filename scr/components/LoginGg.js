import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const LoginGg = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image
          source={require('../assets/icon/Google.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginGg;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    width: Dimensions.get('window').width - 40,
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 2,
  },
  icon: {
    height: 24,
    width: 24,
    marginHorizontal: 20,
  },
  text: {
    color: '#9098B1',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 60,
  },
});
