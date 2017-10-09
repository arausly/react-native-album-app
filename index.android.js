import React from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
} from 'react-native';
import Header  from './src/components/header';
import AlbumList from './src/components/AlbumList';

const MyFirstComponent = () =>{
   return (
     <View style={{ flex:1 }}>
        <Header headerTitle={'Albums'}/>
        <AlbumList />
     </View>
   );
}

AppRegistry.registerComponent('resurrect',() => MyFirstComponent );