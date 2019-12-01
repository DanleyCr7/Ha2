import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import Login from './pages/login';
import CreateUser from './pages/createUser';
import Mapa from './pages/App';
import Form from './pages/form';
import Resultado from './pages/resultado';
import Inicio from './pages/estatica/home';
import Doenca from './pages/estatica/Doenca';
import Suspeita from './pages/estatica/Suspeita';
import Sintomas from './pages/estatica/Sintomas';
const { width } = Dimensions.get("window");

const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 250, backgroundColor: '#d2d2d2', opacity: 0.9 }}>
        <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/mapa.png')} style={{ height: 150, width: 150, borderRadius: 60 }} />
        </View>
        <View style={{ height: 50, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
          <Text>Danrley Silva</Text>
        </View>
      </View>
      <ScrollView>
        <TouchableOpacity>
          <Text>Teste</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* <View style={{ alignItems: "center", bottom: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', marginRight: 15 }}>
            <Icon name="flask" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Icon name="call" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
          </View>
        </View>
      </View> */}
    </SafeAreaView>
  );
}


export default createStackNavigator({
  'Inicio': {
    screen: Inicio,
    navigationOptions: {
      title: 'NitLabImage',
      headerTitleStyle: {
        textAlign: 'center',
        // flexGrow: 1,
        // alignSelf: 'center',
        marginLeft: 65,
      },
    }
  },
  'Login': {
    screen: Login,
    navigationOptions: {
      title: 'Bem Vindo',
    }
  },

  'Mapa': {
    screen: Mapa,
    navigationOptions: {
      title: 'Bem Vindo',
    }
  },
  'Doenca': {
    screen: Doenca,
    navigationOptions: {
      title: 'Localização',
    }
  },
  'Sintomas': {
    screen: Sintomas,
    navigationOptions: {
      title: 'Sintomas',
    }
  },

  'Suspeita': {
    screen: Suspeita,
    navigationOptions: {
      title: 'Suspeita',
    }
  },


  'CreateUser': {
    screen: CreateUser,
    navigationOptions: {
      title: 'Criar Usuario',
    }
  },
  'Formulario': {
    screen: Form,
    navigationOptions: {
      title: 'Formulario',
    }
  },
  'Resultado': {
    screen: Resultado,
    navigationOptions: {
      title: 'Resultado',
    }
  },

},
  {
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#7159c1'
      },
      headerTintColor: '#fff'
    },
  });