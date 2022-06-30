import React, { useState } from "react";
import { View, Text, TextInput, Picker, TouchableOpacity, StyleSheet } from "react-native";
import {dataRef} from './References';

export default function TambahBarang({navigation, route}){
    const [id, setId] = useState("");
    const [nama, setNama] = useState("");
    const [quantity, setQuantity] = useState("");
    
  const submit = () => {
         let newData={
             id: id,
             nama: nama,
             quantity: quantity
        };
        const ref = dataRef.child('barang').push(newData);
        const key = ref.key;
        dataRef.child('barang').child(key).update({'key': key})
        navigation.navigate('Portofolio')
    };

    return (
      <View style={styles.container}>
        <View style={styles.posTitle}>
          <Text style={styles.title}>Tambah Barang</Text>
        </View>

          <View style={styles.contInput}>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Masukkan id"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setId(value)}
                  value={id}
                />
            </View>

            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Masukkan nama"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setNama(value)}
                  value={nama}
                />
            </View>

            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Masukkan quantity"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setQuantity(value)}
                  value={quantity}
                />
            </View>

          
          
            
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>submit()}
                >
                  <Text style={styles.textButton}>Tambah</Text>
                </TouchableOpacity>
            </View>
          </View>
          
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop: 40
    },
    posTitle:{
      alignItems: 'center'
    },
    title:{
      fontSize : 18,
      fontWeight : 'bold',
      color:'#0066ff'
    },
    contInput:{
      backgroundColor:'#0066ff',
      margin: 20,
      padding: 15,
      borderRadius: 15
    },
    posInput:{
      marginLeft : 20,
      marginRight : 20,
      marginBottom : 10,
      paddingLeft : 10,
      paddingRight: 10,
      backgroundColor:'#0066ff'
    },
    input:{
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
    }
});
