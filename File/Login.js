import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground,Alert,Image } from "react-native";
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
       <View style={styles.container}>
     
     
       
           
          
                <View style={styles.contBack}>
                    
                         <View style={styles.contlog}>
                        
                            <View style={styles.posInput}>
                                <TextInput 
                                       style={styles.input}
                                        placeholder="Username"
                                        placeholderTextColor="white"
                                        color="white"
                                        onChangeText={(value)=>setEmail(value)}
                                        value={email} 
                                 />
                
                            </View>
                          <View style={styles.posInput}>
                                <TextInput 
                                 style={styles.input}
                                  placeholder="Password"
                                  borderBottomColor="red"
                                  placeholderTextColor="white"
                                  secureTextEntry="true"
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
                          <View style={styles.posButton1}>
                              <Text style={styles.textRegis}>Don't have an account yet? </Text>
                              <TouchableOpacity onPress={()=>regis()} >
                                 <Text style={styles.textRegis1}>Register</Text>
                              </TouchableOpacity>
                          </View>
                        </View>  
      
                </View>  
     
          
        
      </View>
  
    )
}



const styles = StyleSheet.create({
    container:{
      margin: 0,
      padding:0,
       width:"100%",
      height:"100%",
    },
   contBack:{
    
      alignItems:"center",
      borderRadius: 15,
    },
   contlog:{
      width:"80%",
      height:"100%",
      padding:"5%",
      margin:"10%",
      marginTop:"60%",
      borderRadius: 15,
    },
  
    posInput:{
      borderRadius: "50px",
      marginLeft : 20,
      marginRight : 20,
      marginBottom : 10,
      paddingLeft : 10,
      paddingRight: 10,
      backgroundColor:"#402FFFFF"

    },
    input:{
      height : 30,
      borderBottomWidth:1,
      borderBottomColor : '#ffffff',
      color:"white"
    },
    posButton:{
      margin: 20,
      alignItems:'center',
    },
    posButton1:{
      marginLeft: 20,
      marginRight: 20,
      justifyContent:'center',
      flexDirection: 'row'
    },
    button:{
      borderRadius: 5,
      width: "50%",
      height: 30,
      alignItems:'center',
      backgroundColor : '#ccffff', 
      justifyContent : 'center'
    },
    textButton:{
      fontWeight: 'bold',
      color: '#0066ff'
    },
    textRegis:{
      color:'white',
    },
    textRegis1:{
      color:'cyan',
      fontWeight:'bold'
    }
});
