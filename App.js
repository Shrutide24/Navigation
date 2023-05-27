import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import StackNavigation from './stackNavigation'
import AppIntro from './src/screans/appIntro'
import PageOne from './AsyncStorage/pageOne'
import PageTwo from './AsyncStorage/pageTwo'
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {   //4
  try {
    const value = await AsyncStorage.getItem('intro');   //5
    console.log('Retrieved value:', value);
    return value; //6    
  } catch(e) {
    console.log('erro while get Async storage >>',e)
  }
}

export default function App() {
  const [introShow, setIntroShow]=useState('true')  //9


   {/**step 1 */}
  useEffect(()=>{                
    const fetchData = async () => {  //2
      try {
        const value = await getData();  //3  //7
        console.log('app value >>',value)
        if(value!=null){
          setIntroShow(value);  //8
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[])


  return (
    
    <View style={{flex:1}}>
      {/* <StackNavigation/> */}
      {/* <AppIntro/> */}
      
       {/**step 9 */}
      {introShow ==='true' ? (<AppIntro/> ):(<StackNavigation/>)}  

    </View>
   
  )
}