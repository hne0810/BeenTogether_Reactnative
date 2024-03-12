import { StyleSheet, Text, View, ScrollView, Image,Switch,Button} from 'react-native'
import React, {useState} from 'react'
import { imageApp } from '../../../assets'

export default function Memory({navigation}:any) {
  const [isRowList, setColList] = useState(true);
  const toggleSwitch = () => setColList(previousState => !previousState);
  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isRowList ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isRowList}
        />
        {isRowList ? <RowList /> : <ColList />}

      </View>
      <View style={{flex:1}}>
      </View>
  </View>
  )
}

const RowList= () => {
  return(
    <ScrollView style={{flex:1}}>
      <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.anhgai} />
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o1} />
        <Image 
          style={{width:100,height:100, marginTop:20}}
          source={imageApp.o2} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o3} />
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o4} />
        <Image 
          style={{width:100,height:100, marginTop:20}}
          source={imageApp.o5} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o6} />
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o7} />
        <Image 
          style={{width:100,height:100, marginTop:20}}
          source={imageApp.o8} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o9} />
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o10} />
        <Image 
          style={{width:100,height:100, marginTop:20}}
          source={imageApp.o11} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o12} />
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o13} />
        <Image 
          style={{width:100,height:100, marginTop:20}}
          source={imageApp.o14} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o15} />
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o16} />
        <Image 
          style={{width:100,height:100, marginTop:20}}
          source={imageApp.o17} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o18} />
        <Image 
          style={{width:100,height:100, marginTop:20,marginRight:10}}
          source={imageApp.o19} />
        <Image 
          style={{width:100,height:100, marginTop:20}}
          source={imageApp.o20} />
      </View>

    </ScrollView>
  )
}

const ColList = () => {
  return(
    <ScrollView style={{flex:1,flexDirection:'column'}}>
      <View style={{flex:1,flexDirection:'row',marginTop:20}}>
        <Image 
          style={{width:50,height:50}}
          source={imageApp.anhgai}/>
        <Text>abcxyz</Text>
    </View>
  </ScrollView>
  )
}


const styles = StyleSheet.create({})