import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Book = () => {
  return(
    <TouchableOpacity style = {styles.bookList}>
      <Text style = {styles.text}>{title}</Text>
    </TouchableOpacity>
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

export default Book;