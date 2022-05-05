import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
      <View
        style={{ flex:1, alignItems: 'center', justifyContent: 'center', }}>
          <Text>HomeScreen</Text>
          <Button title="Go to Detail" onPress={() => navigation.navigate('Details')}/>
      </View>
  );
}
function DetailScreen({ navigation }) {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center', }}>
      <Text>DetailScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
      <StatusBar></StatusBar>
    </View>
  )
}
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} options={{ title:'Overview' }}/>
        <Tab.Screen name="Details" component={DetailScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;