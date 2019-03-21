import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default class Siak extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        Tugas1:0,
        Tugas2:0,
        NA:0,
        Predikat:'',
        };
    }
    render() {
      return (
        <View style={styles.containerMain}>
            <View style={styles.header}>
                <Text style={styles.text}>Siak</Text>
            </View>


            <View style={styles.slider}>
                <View style={styles.masuk}>
                    <Text style={styles.text3}>Tugas 1 :</Text>
                    <TextInput style = {{height: 40, backgroundColor:'white', margin:20,padding: 10}}
                    placeholder="Masukkan Nilai Tugas1"
                    onChangeText={
                        (Tugas1)=>this.setState({Tugas1})
                    }
                    keyboardType = 'numeric'
                    />
                </View>

                <View style={styles.masuk}>
                <Text style={styles.text3}>Tugas 2 :</Text>
                <TextInput style = {{height: 40, backgroundColor:'white', margin:20,padding: 10}}
                    placeholder="Masukkan Nilai Tugas2"
                    onChangeText={
                        (Tugas2)=>this.setState({Tugas2})
                    }
                    keyboardType = 'numeric'
                    />

                </View>

             <View style={styles.vbutton}>
                <Button
                      onPress={() => {
                        let NA=0.5*this.state.Tugas1 + 0.5*this.state.Tugas2 ;  //MEMBUAT VARIABEL NA SEBANYAK 2 satu untuk hasil penjunmlahan dan satu untuk menamplkan/mengembalikan nilai
                        this.setState({ NA:NA });

                        if (NA>50)
                        this.setState({Predikat:'Lulus'});
                        else {
                          this.setState({Predikat:'Tidak Lulus'});
                        }
                        }
                        }
                        title="Hitung"
                        accessibilityLabel="Klik untuk menghitung"
                        />
            </View>


            </View>


            <View style={styles.box3}>

            <Text style={styles.text2}>Tugas1 : {this.state.Tugas1} </Text>
            <Text style={styles.text2}>Tugas2 : {this.state.Tugas2} </Text>
            <Text style={styles.text2}>Nilai Akhir : {this.state.NA} </Text>
            <Text style={styles.text2}>Predikat : {this.state.Predikat} </Text>





            </View>

            {/* <View style={styles.footer}>
            <Text style={styles.text}>Copyright Supri 2019</Text>
            </View> */}

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      flexDirection: 'column',

    },
    header:{
        flex: 1,
        backgroundColor: '#3333cc',
        justifyContent: 'center',
        alignItems: 'center',

      },

      slider:{
        flex: 4,
        backgroundColor: '#61cdf4',
        flexDirection: 'column',
        justifyContent : 'center',
      },

      masuk:{
        flex : 1,
        flexDirection: 'row',

      },

      box3: {
        flex: 3,
        backgroundColor: 'powderblue',

      },

      box: {
       backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },

      text: {
        fontSize: 25,
        color: 'white',
      },

      text2: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        margin:15,

      },

      text3: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        margin:15,

      },


      tinggi:{
          height:20,
      },

      vbutton:{
          flex:1,
          justifyContent: 'center',
          padding: 20,

      }

  });
