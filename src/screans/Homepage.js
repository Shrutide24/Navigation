import { View, Text,Platform, Button,TextInput,StyleSheet, TouchableOpacity,ScrollView} from 'react-native'
import React,{useState} from 'react'



export default function Homepage({ navigation }) {  
    const [name, setname]=useState();
    const [lastName, setlastName]=useState();
    const [dob, setdob]=useState();
    const [address, setaddress]=useState();
    const [gender, setgender]=useState();
    const [email, setemail]=useState();
    return (
        <ScrollView>
      <View>
        <Text style={{alignSelf:'center',margin:20,fontWeight:'bold',fontSize:20}}>SignUp</Text>
        <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(data)=>{setname(data)}}
      />
      <TextInput
        style={styles.input}
        placeholder="Lastname"
        onChangeText={(data)=>{setlastName(data)}}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        onChangeText={(data)=>{setdob(data)}}
      />
       <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={(data)=>{setaddress(data)}}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        onChangeText={(data)=>{setgender(data)}}
      />
      <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText={(data)=>{setemail(data)}}
       />
       

      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('AboutPage',{
            name,
           lastName ,
           dob,
            address,
            gender,
            email,
        })}>
        <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'white'}}>Submit</Text>
      </TouchableOpacity>
      
        
      </View>
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    input:{
    borderBottomWidth:2,
    margin: 12,
    padding: 10,
    },
    button:{
        height:50,
        width:200,
        alignSelf:'center',
        borderWidth:5,
        borderRadius:10,
        justifyContent:'center',
        marginTop:20,
        backgroundColor:'black'

    }
   
  });