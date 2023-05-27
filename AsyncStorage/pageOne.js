import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function pageOne() {

    const storeData = async () => {   //2
        try {
          await AsyncStorage.setItem('intro', "false") //3
          console.log('data store success')
        } catch (e) {
          console.log('error while  storing data in asyn >>',e)
        }
      }



  return (
    <View style={styles.container}>
      <Text>pageOne</Text>

        {/**step 1 */}
      <TouchableOpacity style={styles.button} onPress={storeData}> 
        <Text>Intro Part Done</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        marginTop:20,
        borderWidth:1,
        padding:10,
        borderRadius:10
        
        
    }

})