import React from "react";
import { View, Text, StyleSheet, Image,Linking,TouchableOpacity } from "react-native";

export default function About(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.nama}>
                      <Text style={styles.namaText}>MylitlleBussines</Text>
                      <Text style={styles.asText}>Aplikasi ini menyimpan informasi barang dan costumer.</Text>

              </View>
          </View>
          <Text style={styles.namaText}>call us</Text>

          <TouchableOpacity onPress={() => Linking.openURL("https://wa.me/083816281318")}> 
          <Text style={styles.asText}>Arid</Text> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://wa.me/085743019186")}> 
          <Text style={styles.asText}>Aris</Text> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://wa.me/082370488875")}>
           <Text style={styles.asText}>Taufik</Text>
            </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL("https://snack.expo.dev/@arestok/5597e7")}> 
          <Text style={styles.asText}>special untuk bu Meriska</Text> 
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL("https://github.com/foxrider1998/expocrud")}> 
          <Text style={styles.asText}>this project avaible at github</Text>
           </TouchableOpacity>

		    </View>

    )
  }

const styles = StyleSheet.create({
	container:{
		flex:1,
        backgroundColor: 'white',
        flexDirection:'column'
	},
	header:{
		backgroundColor:'white',
		marginTop:200,
    flexDirection: 'column',
	},
    nama:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop:10,
        marginBottom :15,
        padding:20
    },
    namaText:{
        color:'#2991FF', 
        fontSize:25, 
        fontWeight: 'bold',
        marginLeft:30,
        marginRight:30,
        marginBottom : 10
    },
    asText:{
        color:'#2991FF', 
        fontSize:20,
        textAlign:'center' 
    }
})