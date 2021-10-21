import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src-24i/pages/SignUp';

//import static { Register } from './src-24i/pages/Register';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./src-24i/img/24i_logo.png')} style={{ width: 196, height: 85 }} />
      <Text />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
      />
      <Button
        title="Sign In"
        color='#B02436'
        onPress={() => navigation.navigate('SignUp')}
      />
      <Text> -or- </Text>
      <Button
        title="Sign Up"
        color='#B02436'
        onPress={() => navigation.navigate('SignUp')}
      />
    </View >
  );
}

/*function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}*/

const Stack = createNativeStackNavigator();

export default function App() {
  /*return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      );*/
  /*return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      );*/
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="24/i - Smart TV" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderColor: '#B02436',
    padding: 10,
  }
});
