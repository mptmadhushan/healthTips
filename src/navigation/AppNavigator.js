import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from '../screens/OnBoard';
import LogIn from '../screens/LogIn';

import Register from '../screens/Register';
import Details from '../screens/Details';
import BMI from '../screens/BMI';
import UserDetails from '../screens/UserDetails';
import Meal from '../screens/Meal';
import MealResult from '../screens/MealResult';
import HealthTips from '../screens/HealthTips';
import MoreUserData from '../screens/MoreUserData';
import SuspectFood from '../screens/SuspectFood';
import AlleResult from '../screens/AlleResult';
import Symptoms from '../screens/Symptoms';
import MealDinner from '../screens/MealDinner';
import MealLunch from '../screens/MealLunch';
import MealOther from '../screens/MealOther';

import {TapGestureHandler} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoard"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
        <Stack.Screen
          name="OnBoard"
          options={{headerShown: false}}
          component={OnBoard}
        />
        <Stack.Screen
          name="LogIn"
          options={{headerShown: false}}
          component={LogIn}
        />
        <Stack.Screen
          name="Details"
          options={{headerShown: false}}
          component={Details}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={Register}
        />
        <Stack.Screen
          name="BMI"
          options={{headerShown: false}}
          component={BMI}
        />
        <Stack.Screen
          name="UserDetails"
          options={{headerShown: false}}
          component={UserDetails}
        />
        <Stack.Screen
          name="Meal"
          options={{headerShown: false}}
          component={Meal}
        />
        <Stack.Screen
          name="MealResult"
          options={{headerShown: false}}
          component={MealResult}
        />
        <Stack.Screen
          name="MoreUserData"
          options={{headerShown: false}}
          component={MoreUserData}
        />
        <Stack.Screen
          name="HealthTips"
          options={{headerShown: false}}
          component={HealthTips}
        />
        <Stack.Screen
          name="SuspectFood"
          options={{headerShown: false}}
          component={SuspectFood}
        />
        <Stack.Screen
          name="AlleResult"
          options={{headerShown: false}}
          component={AlleResult}
        />
        <Stack.Screen
          name="MealDinner"
          options={{headerShown: false}}
          component={MealDinner}
        />
        <Stack.Screen
          name="MealLunch"
          options={{headerShown: false}}
          component={MealLunch}
        />
        <Stack.Screen
          name="Symptoms"
          options={{headerShown: false}}
          component={Symptoms}
        />
        <Stack.Screen
          name="MealOther"
          options={{headerShown: false}}
          component={MealOther}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
