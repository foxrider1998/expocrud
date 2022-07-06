import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert, Image, ImageBackground } from "react-native";
import {auth} from './References';

export default function Login({navigation}){
        const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 


    const submit=()=>{
      if(email =="" || password=="" ){
        Alert.alert("email dan password harus diisi!")
      }
      else{
        auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Login berhasil")
        navigation.navigate("MyDrawer")
      })
      .catch(()=>{
        console.log("Register gagal")
      })
    }
  }
     const regis=()=>{
        navigation.navigate('Registrasi');
    };
    return (
      
      <ImageBackground source={require("../assets/loginbg.jpg")} style={styles.bg} > 
        
        <View style={styles.space}> 
        </View>
        <View style={styles.posTitle}>
          
          <Text style={{fontSize:24,color:"white"}}>
            silahkan masuk atau mendaftar
            </Text>
       </View>

          <View style={styles.contInput}>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setEmail(value)}
                  value={email}
                />
            </View>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setPassword(value)}
                  value={password} 
                />
            </View> 
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>submit()}
                >
                  <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>

             <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button} onPress={()=>regis()} 

                >
                  <Text style={styles.textButton}>Register</Text>
                </TouchableOpacity>
            </View>
          </View>
      </ImageBackground> 
     
    )
}

const styles = StyleSheet.create({
   bg:{width :null,
        height:null,
        flex:3

    }, 
    posTitle:{
      alignItems: 'center'
    },
    space:{
      alignItems: 'center',
      height : "40%"
    },
    posTitle1:{
      alignItems: 'center',
      margin : 20
    },
    contInput:
      {marginTop:10,
       
      alignItems: 'center',
      
      borderRadius: 15
    },
    posInput:{ width:230,
      margin:4,
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor:'#0066ff'
    },
    input:{
      borderRadius: 35,
      height : 30,
      borderBottomWidth:1,
      borderBottomColor : '#ffffff',
      backgroundColor: '#0066ff',
      color: 'white'
    },
    posButton:{
      margin: 20,
      alignItems:'center'
    },
    button:{
      borderRadius: 5,
      width: 180,
      height: 30,
      alignItems:'center',
      backgroundColor : '#ccffff', 
      justifyContent : 'center'
    },
    textButton:{
      fontWeight: 'bold',
      color: '#0066ff'
    },
});
