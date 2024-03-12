import { View, Text, StyleSheet, TouchableOpacity, Image,Button} from 'react-native'
import * as React from 'react'
import Home from '../HomeScreen/index'
import { imageApp } from '../../../assets';
import Memory from '../../route/Memory'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = ({title,onPress}:any) => {
  return(
    <View style={{flex:1}}>
      <View style={{flex:1}}>
      <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const Menu = ({ navigation }:any) => {
  return(
    <View style={{flex:1}}>
      <View style={{backgroundColor:'pink',flex:0.2}}>
      </View>
      <View style={{backgroundColor:'#fff',flex:1}}>
        <Button 
          title="Kỉ niệm"
          onPress={() => navigation.navigate('Memory')}/>
        <Button 
          title="Cài đặt"
          onPress={() => navigation.navigate('setting')}/>
        <TouchableOpacity style={{backgroundColor:'#fff',padding:20}}>
          <Text>Cài đặt</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Viewcontainer:{},

  ViewTab:{
  },

  Text:{},
})

export default Menu;
