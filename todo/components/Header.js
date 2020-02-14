import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title}) => {
  return(
    <View style = {styles.header}>
      <Text style = {styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    height: 70,
    padding: 15,
    backgroundColor: '#2f3035',
  },
  text: {
      color:'#898378',
      fontSize: 23,
      textAlign: 'center',
  }
});

export default Header;