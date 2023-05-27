import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/screans/Homepage'
import AboutPage from './src/screans/Aboutpage';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Homepage" 
      component={Homepage} 
       options={{
          headerShown: false  
        }}/>
      <Stack.Screen name="AboutPage" component={AboutPage} options={{
          headerShown: false  
        }} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
