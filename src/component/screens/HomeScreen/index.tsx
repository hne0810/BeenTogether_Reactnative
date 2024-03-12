import { StyleSheet, Text, View,Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { imageApp } from '../../../assets'

const Home = ({ navigation }:any) => {
  return (
    <View style={styles.viewCotainer}>
        {/*View 1 */}
        <Button
        title="Đi đến Menu"
        onPress={() => navigation.navigate('Menu')}
      />
        <View style={styles.view1}>
        <Image source={imageApp.special} style={{width:450,height:300}} />
        </View>

        {/**View 2 */}
        <View style={styles.view2}>
            <View style={{justifyContent:'center',flex:1}}>
                <Text style={{color:'black',fontSize:17,fontWeight:'400',marginTop:120,textAlign:'center'}}>Been Together</Text>
                <Text style={{color:'black',fontSize:24,fontWeight:'600',textAlign:'center'}}>362 ngày</Text>
                <Text style={{color:'black',fontSize:17,fontWeight:'400',textAlign:'center'}}>Đã bên nhau</Text>
            <View style={{flex:1,marginTop:50,flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Image source={imageApp.number1} style={{height:100,width:100,borderRadius:100,marginLeft:80}} />
                    <Text style={{color:'black',fontSize:15,fontWeight:'normal',marginLeft:93,textAlignVertical:'center'}}>Number 1</Text>
                </View>

                <View style={{flex:1}}>
                    <Image source={imageApp.anhgai} style={{width:100,height:100,borderRadius:100,marginLeft:50}} />
                    <Text style={{color:'black',fontSize:15,fontWeight:'normal',marginLeft:63,textAlignVertical:'center'}}>Number 2</Text>
                </View>
            </View>
            </View>
        </View>
    </View>
  )
}

const handlePress = () => {}


const styles = StyleSheet.create({
    viewCotainer:{
        backgroundColor:'#fff',
        flex: 1,
    },
    
    view1:{
        flex:0.5
    },
    view2:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fff',
    },

    viewN1:{},

})

export default Home;

