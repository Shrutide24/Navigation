import { View, Text,Button,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

const Aboutpage = ({ route, navigation }) => {
    console.log("param data >>>",route)
const {name,lastName,dob,address,gender, email,} = route.params; 
  return (
    <View>
      <Image
        style={styles.stretch}
        source={require('../screans/images/1576939056584.jpg')}
      />
      <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20}}>{name}{lastName}</Text>
      <View>
      <View style={styles.date}>
      <View style={{flexDirection:'row'}}>
      <Feather name="calendar" size={24} color="black" />
      <Text style={{marginLeft:20}}>{dob}</Text>
      </View>
      <EvilIcons name="pencil" size={24} color="black" />
      </View>
       
      <View style={styles.date}>
        <View style={{flexDirection:'row'}}>
      <Entypo name="address" size={24} color="black" />
      <Text style={{marginLeft:20}}>{address}</Text>
      </View>
      <EvilIcons name="pencil" size={24} color="black" />
      </View>

      <View style={styles.date}>
        <View style={{flexDirection:'row'}}>
      <MaterialCommunityIcons name="gender-male-female" size={24} color="black" />
      <Text style={{marginLeft:20}}>{gender}</Text>
      </View>
      <EvilIcons name="pencil" size={24} color="black" />
      </View >
      <View style={styles.date}>
      <View style={{flexDirection:'row'}}>
      <MaterialCommunityIcons name="email" size={24} color="black" />
      <Text style={{marginLeft:20}}>{email}</Text>
      </View>
      <EvilIcons name="pencil" size={24} color="black" />
      </View>
      </View>
      
      <TouchableOpacity style={styles.button}
         onPress={() => navigation.goBack()}>
            <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'white'}}>Go Back</Text>
         </TouchableOpacity>
        
      
      
    </View>
  )
}
const styles = StyleSheet.create({
    stretch: {
      width: 100,
      height: 100,
      alignSelf:'center',
      marginTop:50,
      borderRadius:50
    },
    date:{
    flexDirection:'row',justifyContent:'space-between',marginTop:20,marginHorizontal:20
    },
    button:{
        height:50,
        width:200,
        alignSelf:'center',
        borderWidth:5,
        borderRadius:10,
        justifyContent:'center',
        marginTop:50,
        backgroundColor:'black'

    }
  });

export default Aboutpage
