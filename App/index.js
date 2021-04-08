import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text> Salami Is cute</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// Button Ideas 
      {/* <FontAwesome name="apple" size={25} />
      <MaterialIcons name="star" color="blue" size={25} /> */}
      {/* Create a button */}
      {/* <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={() => {}}>
        Login with Facebook
      </FontAwesome.Button> */}
