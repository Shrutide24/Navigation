import {View, Text, Image,StyleSheet,Button} from 'react-native';
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import AppIntroSlider from 'react-native-app-intro-slider';
import { LinearGradient } from 'expo-linear-gradient';
import StackNavigation from '../../stackNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';


const appIntro = () => {
    const [showRealApp, setShowRealApp] = useState(false);
    const storeData = async () => {   //2
        try {
          await AsyncStorage.setItem('intro', "false") //3
          console.log('data store success')
        } catch (e) {
          console.log('error while  storing data in asyn >>',e)
        }
      }

    const onDone = () => {
        setShowRealApp(true);
        storeData()
    };
    const onSkip = () => {
        setShowRealApp(true);
        storeData()
    };
    const slides = [
        {
            key: 's1',
            text: 'Best Recharge offers',
            title: 'Mobile Recharge',
            image: {
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png'
            },
            backgroundColor: '#20d2bb'
        },
        {
            key: 's2',
            title: 'Flight Booking',
            text: 'Upto 25% off on Domestic Flights',
            image: {
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png'
            },
            backgroundColor: '#febe29'
        },
        {
            key: 's3',
            title: 'Great Offers',
            text: 'Enjoy Great offers on our all services',
            image: {
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png'
            },
            backgroundColor: '#22bcb5'
        },
        {
            key: 's4',
            title: 'Best Deals',
            text: ' Best Deals on all our services',
            image: {
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png'
            },
            backgroundColor: '#3395ff'
        }, {
            key: 's5',
            title: 'Bus Booking',
            text: 'Enjoy Travelling on Bus with flat 100% off',
            image: {
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png'
            },
            backgroundColor: '#f6437b'
        }, {
            key: 's6',
            title: 'Train Booking',
            text: ' 10% off on first Train booking',
            image: {
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png'
            },
            backgroundColor: '#febe29'
        },
    ];

    const RenderItem = ({item}) => {
        return (
            <View style={
                {
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100
                }
            }>

               
                <Text style={
                    styles.introTitleStyle
                }>
                    {
                    item.title
                }</Text>
                <Image style={
                        styles.introImageStyle
                    }
                    source={
                        item.image
                    }/>
                <Text style={
                    styles.introTextStyle
                }>
                    {
                    item.text
                }</Text>
            </View>
        );
    };


    return (
        // true ? a=10 : a=12
        <SafeAreaView style={{flex:1}}>  
        <LinearGradient colors={['#F9F5F6', '#F8E8EE', 'black']}  style={{flex:1}} >
    
           {showRealApp ? (
             <StackNavigation/>
           ):( 
            <AppIntroSlider data={slides}
                renderItem={RenderItem}
                onDone={onDone}
                showSkipButton={true}
                onSkip={onSkip}/>
           )}

</LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#42b6f5',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'center',

    },
    titleStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    paragraphStyle: {
      padding: 20,
      textAlign: 'center',
      fontSize: 16,
    },
    introImageStyle: {
      width: 200,
      height: 200,
    },
    introTextStyle: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      paddingVertical: 30,
    },
    introTitleStyle: {
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
      marginBottom: 16,
      fontWeight: 'bold',
    },
  });
  
export default appIntro
