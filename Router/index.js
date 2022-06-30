import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from '../File/Login';
import Biodata from '../File/Biodata';
import TambahCostumer from '../File/TambahCostumer';
import TambahBarang from '../File/TambahBarang';
import Data from '../File/Data';
import DataCost from '../File/Data-Costumer';
import About from '../File/About';
import EditBarang from '../File/EditBarang';
import EditCostumer from '../File/Editcostumer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="MyTab" component={MyTab} options={{ title:'Kembali', headerShown: false }}/>
        <Stack.Screen name="MyStack" component={MyStack} options={{ title:'Batal', headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#2991FF',
        inactiveTintColor: 'black',
        activeBackgroundColor: '#ccffff',
        labelStyle: { fontSize: 13, marginBottom: 10 },
        style: {
          backgroundColor: 'black',
          height: 40,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Biodata"
        component={Biodata}
        options={{
          tabBarLabel: 'Biodata',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      
      
      <Tab.Screen
        name="Data Barang"
        component={Data}
        options={{
          tabBarLabel: 'Data Barang',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Data Costumer"
        component={DataCost}
        options={{
          tabBarLabel: 'Data Costumer',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MyDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={MyTab} />
    <Drawer.Screen name="About" component={About} />
  </Drawer.Navigator>
);

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Edit Barang"
        component={EditBarang}
      />
      <Stack.Screen
        name="Edit Costumer"
        component={EditCostumer}
      />
      <Stack.Screen
        name="Tambah Costumer"
        component={TambahCostumer}
      />
       <Stack.Screen
        name="Tambah Barang"
        component={TambahBarang}
      />
    </Stack.Navigator>
  );
};