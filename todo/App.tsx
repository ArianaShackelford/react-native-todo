import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {uuid} from 'uuidv4'

import Header from './components/Header';
import Book from './components/Book';

const App = () => {
  const [books, setBooks] = useState([
    {id: uuid(), text: 'Coders' },
    {id: uuid(), text: `The Clockmaker's Daughter` },
    {id: uuid(), text: 'Organic indoor gardening' },
  ]);


  return(
    <View style = {styles.container}>
      <Header title = 'Book List'/>
      <FlatList 
        data={books}
       renderItem={({item}) => 
        <Text>{item.text}</Text>
      } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;