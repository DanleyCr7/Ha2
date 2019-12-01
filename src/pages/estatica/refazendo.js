import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

// import { Container } from './styles';
import logo from '../../../assets/git.png'
import exclamacao from '../../../assets/exclamacao.png'
import interrogacao from '../../../assets/interrogacao.png'
import sintomas from '../../../assets/sintomas.png'
import supeita from '../../../assets/supeita.png'
export default class Home extends Component {
  static navigationOptions = {
    headerTitle: 'Inicio'
  };
  render() {
    return (
      <ScrollView>
        {/* <View style={styles.container}> */}
        <Text style={styles.textPefil}>Olá, Danrley</Text>
        <ScrollView horizontal={true} style={styles.ScrollViewsMais}>
          {/* <View style={styles.container}> */}
          {/* <Image
              style={styles.logo}
              source={logo}
              aspectRatio={1}
            // resizeMode='stretch'
            /> */}
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => this.props.navigation.navigate('Doenca')}
          >
            <Image
              style={styles.iconLeft}
              source={interrogacao}
              aspectRatio={1}
            // resizeMode='stretch'
            />
            <View style={styles.info}>
              <Text style={styles.title}>Hanseniase</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewButton}>
            <Image
              style={styles.iconLeft}
              source={sintomas}
              aspectRatio={1}
            // resizeMode='stretch'
            />
            <View style={styles.info}>
              <Text style={styles.title}>Sitomas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewButton}>
            <Image
              style={styles.iconLeft}
              source={supeita}
              aspectRatio={1}
            // resizeMode='stretch'
            />
            <View style={styles.info}>
              <Text style={styles.title}>Suspeita</Text>
            </View>
          </TouchableOpacity>

          {/* </View> */}
        </ScrollView>
        {/* </View> */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Mapa')}>
            <Text style={styles.textButton}>Fazer Analise</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 200,
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#5f0882',
  },
  textPefil: {
    backgroundColor: '#5f0882',
    marginTop: 20
  },
  info: {
    flexDirection: 'column'
  },
  viewButton: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 130,
    // borderWidth: 2,
    backgroundColor: '#fff',
    // borderColor: '#CCC',
    // borderStyle: 'dashed',
    height: 150,
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 18,
    marginRight: 15
  },
  logo: {
    width: 250,
    height: 90,
    marginTop: 20,
    marginBottom: 10
  },
  iconLeft: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginTop: -100
  },
  iconRight: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 30,
    marginTop: -50,
    // alignContent: 'center'
  },
  desc: {
    fontSize: 16
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#5f0882',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  ScrollViewsMais: {
    // flex: 1,
    // marginTop: 20,
    backgroundColor: '#5f0882',
    height: 300
  },

})
