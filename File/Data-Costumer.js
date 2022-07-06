import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';
import { dataRef } from './References';
export default function DataCost({ navigation, route }) {
  const [dskill, setDskill] = useState([]);
  const [key, setKey] = useState('');
  const [id, setId] = useState('');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [notel, setNotel] = useState('');

  useEffect(() => {
    const dataFocus = navigation.addListener('focus', () => {
      const listener = dataRef.child('cost').on('value', (snapshot) => {
        let data = snapshot.val();
        let dskill = Object.values(data);
        setDskill(dskill);
      });
    });
  });


  const act = (item) => {
    let key =item.key;
    //function to make three option alert
    Alert.alert(
      //title
      'Hello',
      //body
      ' What action do you want to do to '+item.nama+' ?',
      [
        { text: 'Cancel', onPress: () => console.log('cancel') },
        { text: 'Edit', onPress: () => sendData(item) },
        { text: 'Delete' , onPress: () => hapusData(key) },
      ],
      { cancelable: true }
    );
  };



   const hapusData = (key) =>{
        dataRef.child("cost").child(key).remove();
   }

  const sendData = (item) => {
    navigation.navigate('MyStack', {
      screen: 'Edit Costumer',
      params: {
        key: item.key,
        id: item.id,
        nama: item.nama,
        alamat: item.alamat,
        notel: item.notel,
      },
    });
  };
  const tambahcost = () => {
    navigation.navigate('MyStack', {
      screen: 'Tambah Costumer',
    });
  };
  return (
     <ImageBackground source={require("../assets/login.jpg")} style={styles.bg} >
    
      <ScrollView>
      <View style={styles.posTitle}>
        <Text style={styles.title}>Data Costumer</Text>
      </View>
      <View style={styles.contData}>
        <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Id</Text>
        </View>
        <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Nama </Text>
        </View>
        <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Alamat</Text>
        </View>
        <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Telp</Text>
        </View>
          <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Act</Text>
        </View>
      </View>
      <View style={styles.contFlat}>
        <FlatList
          data={dskill}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
                <View style={styles.contData1}>
                  <View style={styles.contentTitle1}>
                    <Text style={styles.textContentTitle1}> {item.id} </Text>
                  </View>
                  <View style={styles.contentTitle1}>
                    <Text style={styles.textContentTitle1}> {item.nama}</Text>
                  </View>
                  <View style={styles.contentTitle1}>
                    <Text style={styles.textContentTitle1}> {item.alamat}</Text>
                  </View>
                  <View style={styles.contentTitle1}>
                    <Text style={styles.textContentTitle1}> {item.notel}</Text>
                  </View>
                  <View style={styles.contentTitle1}>
                                   <TouchableOpacity onPress={()=>act(item)}>   
                                    <Image source={require('../assets/edit.png' )} ></Image>

                                   </TouchableOpacity>
                                </View> 
                </View>
            );
          }}
        />
      </View>
      <View style={styles.posButton}>
        <TouchableOpacity style={styles.button}onPress={() => tambahcost()}>
          <Text style={styles.textContentTitle1}>Tambah</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
       </ImageBackground >
  );
}

const styles = StyleSheet.create({
    bg:{width :'100%',
        height:'100%'

    },
  container: {
    marginTop: 40,
  },
  posTitle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066ff',
  },
  contData: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0066ff',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
  },
  contFlat: {
    backgroundColor: '#ccffff',
    paddingTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  contData1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  contentTitle: {
    marginTop: 5,
  },
  contentTitle1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContentTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 10,
  },posButton:{
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
  textContentTitle1: {
    fontWeight: 'bold',
    fontSize: 10,
  },
});
