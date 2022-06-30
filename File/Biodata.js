import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Biodata(){
    return(
      <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.subHeader}>
                        <Image
                            style={{height:130, width:130}}
                            source={require('../assets/user.png')}
                        />
                    </View>
                    <View style={styles.nama}>
                            <Text style={styles.namaText}>Arid Hasan</Text>
                            <Text style={styles.asText}>191351006</Text>
                            <Text style={styles.asText}>Teknik Informatika</Text>
                    </View>
                </View>
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
		marginTop:100,
        flexDirection: 'column',
	},
	subHeader:{
        alignItems: 'center',
        justifyContent:'center',
	},
    nama:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop:10,
        marginBottom :15
    },
    namaText:{
        color:'#2991FF', 
        fontSize:25, 
        fontWeight: 'bold',
        borderBottomWidth:1,
        borderBottomColor: '#2991FF', 
        marginLeft:30,
        marginRight:30
    },
    asText:{
        color:'#2991FF', 
        fontSize:20
    }
})