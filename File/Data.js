import React, {useState,useEffect} from "react";
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import {dataRef} from './References';

export default function Data({navigation, route}){
  const [dskill, setDskill] = useState([]);
  const [key, setKey] = useState("");
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(()=> {
        const dataFocus = navigation.addListener('focus', ()=>{
        const listener = dataRef.child("barang").on('value', (snapshot) => {
          let data = snapshot.val();
          let dskill = Object.values(data);
          setDskill(dskill);
          })})})

    const sendData=(item) => {
        navigation.navigate('MyStack',{
            screen:'Edit Barang',
            params: {key:item.key,
                        id:item.id,
                        nama:item.nama,
                        quantity:item.quantity}
        })
        
      }

    const hapusData = (key) =>{
        dataRef.child("barang").child(key).remove();
       }
    const tambahbarang=() => {
        navigation.navigate('MyStack',{
            screen:'Tambah Barang'})
      }
      
    return( 
       <View style={styles.container}>
          <View style={styles.posTitle}>
            <Text style={styles.title}>Data Barang</Text>
          </View>
          <View style={styles.contData}>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Id</Text>
             </View>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Nama Barang</Text>
             </View>
                 <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Quantity</Text>
             </View>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Act</Text>
             </View>
          </View>
          <View style={styles.contFlat}>
              <FlatList
                data={dskill}
                keyExtractor={(item)=>item.key}
                renderItem={({item})=>{
                    return(
                        
                            <View style={styles.contData1}>
                                <View style = {styles.contentTitle1}>
                                    <Text style = {styles.textContentTitle1}> {item.id} </Text>
                                </View>
                                <View style = {styles.contentTitle1}>
                                    <Text style = {styles.textContentTitle1}> {item.nama}
                                    </Text>
                                </View>
                                   <View style = {styles.contentTitle1}>
                                    <Text style = {styles.textContentTitle1}> {item.quantity}
                                    </Text>
                                </View> 
                                <View style = {styles.contentTitle1}>
                                   <TouchableOpacity onPress={()=>sendData(item)}>   
                                    <Text style = {styles.textContentTitle1}> 0
                                    </Text>

                                   </TouchableOpacity>
                                
                                   <TouchableOpacity onPress={()=>hapusData(item.key)}>   
                                    <Text style = {styles.textContentTitle1}> 0
                                    </Text>

                                   </TouchableOpacity>
                                </View> 
                            </View>
                 
                    )
                }}
                />
            </View>
            <View>
                    <TouchableOpacity onPress={()=>tambahbarang()}>
                     <Text style = {styles.textContentTitle1}>Tambah</Text>
                    </TouchableOpacity>
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
      color: '#0066ff'
    },
    contData:{
      flexDirection:'row',
      justifyContent:'space-around',
      backgroundColor:'#0066ff',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      padding: 15,
    },
    contFlat:{
      backgroundColor:'#ccffff',
      paddingTop : 15,
      marginLeft:20,
      marginRight:20,
    },
    contData1:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom : 5
    },
    contentTitle:{
        marginTop:5,
    },
    contentTitle1:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    textContentTitle:{
        fontWeight:'bold',
        color: 'white',
        fontSize:15
    },
    textContentTitle1:{
        fontWeight:'bold',
        fontSize:15
    }
});
