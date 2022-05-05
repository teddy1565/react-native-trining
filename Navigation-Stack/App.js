import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        <Button title="Go to Detail Again" onPress={() => navigation.push('Details')}/>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
      </View>
    )
}
const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title:'Overview' }}/>
          <Stack.Screen name="Details" component={DetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;