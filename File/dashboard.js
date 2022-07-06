import { auth } from 'firebase';
import React, { useState, useEffect } from 'react';
import Router from '../Router';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,ImageBackground
} from 'react-native';
export default function Dashboard({ navigation}) {


  const act = (item) => {
    console.log(item)
    navigation.navigate('Menu', {
      screen: item
     
    });
  };
  const logout = (item) => {
    navigation.navigate(item, {
      screen: item
    });
  
   
  };




  return (   <ImageBackground source={require("../assets/login.jpg")} style={styles.bg} >
    <View style={styles.container}>
              
                    <View style={styles.header}>
                      <View style={styles.photo}>
                        <Image source={require('../assets/user.png')} style={styles.photo} >
                        </Image>
                        <View style={styles.textheader}>
                        <Text style={styles.asText}>      Home</Text>
                        </View>
                        
                        <TouchableOpacity  onPress={()=>logout("LoginScreen")}>
                          <Image source={require('../assets/logout.png')} style={styles.photo} ></Image>
                        </TouchableOpacity>
                        
                      </View>
                    </View>


                     <View style={styles.quickacces}>
                      <TouchableOpacity style={styles.avatar} onPress={()=>act("Laporan")}>
                        <Text style={styles.asText}>Laporan</Text>
                      </TouchableOpacity>
                       <TouchableOpacity style={styles.avatar} onPress={()=>act("Data Costumer")}>
                        <Text style={styles.asText}>data costumer</Text>
                      </TouchableOpacity>

                       <TouchableOpacity style={styles.avatar} onPress={()=>act("Data Barang")}>
                        <Text style={styles.asText}>data barang</Text>
                      </TouchableOpacity>
                  
                    </View>
               
		    </View>
        </ImageBackground>
    )
  }

const styles = StyleSheet.create({
	container:{
        flexDirection:'column'
	},
  logout:{
        marginTop:"10%",
        
        

  },
  textheader:{
        width:"420%",
        height:80,
        flexDirection: 'row',
        alignItems: "center"

  },
  photo:{
        width:80,
        height:80,
        flexDirection: 'row'
        

  },
	header:{
    width :"100%",
		backgroundColor:'grey',
        flexDirection: 'row'
	},
  avatar:{width:80,
        height:80,
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 3,
        margin:5,
        borderRadius:10
       
  },
  bg:{width :'100%',
        height:'100%'

    },
	quickacces:{ marginTop:50,
		backgroundColor:'blue',
        flexDirection: 'row'
  },
    asText:{
        color:'white', 
        fontSize:20
    }
})