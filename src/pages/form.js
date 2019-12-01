import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Picker, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
// import { Container } from './styles';

export default class pages extends Component {
  static navigationOptions = {
    headerTitle: 'Avaliação Médica'
  };
  state = {
    image: null,
    preview: null,
    paciente: '',
    cpf: '',
    cep: '',
    endereco: '',
    bairro: '',
    numCasa: '',
  }

  handleSelectImage = () => {
    ImagePicker.showImagePicker({
      title: 'Selecione a imagem',
    }, upload => {
      if (upload.error) {
        console.log('Error');
      }
      else if (upload.didCancel) {
        console.log('Cancelado');
      }
      else {
        const preview = {
          uri: `data:image/jpeg;base64,${upload.data}`,
        }
        let prefix;
        let ext;

        if (upload.fileName) {
          [prefix, ext] = upload.fileName.split('.')
          ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext
        } else {
          prefix = new Date().getTime();
          ext = 'jpg';
        }

        const image = {
          uri: upload.uri,
          type: upload.type,
          name: `${prefix}.${ext}`
        };

        this.setState({ preview, image })
      }
    })
  }


  handleSubmit = async () => {
    const data = new FormData();
    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    // await api.post('posts', data);

    this.props.navigation.navigate('Resultado');
  }

  render() {
    const { navigation } = this.props;
    const { image } = navigation.state.params;
    return (
      <View style={styles.container}>
        <Image
          source={image}
          style={styles.preview}
        />
        {/* <TouchableOpacity style={styles.selectButton} onPress={this.handleSelectImage}>
          <Text style={styles.selectButtonText}>Captura da imagem</Text>
        </TouchableOpacity>
        {this.state.preview && <Image style={styles.preview} source={this.state.preview} />} */}
        <Text style={styles.textAv}>Avaliação Médica</Text>
        <View style={styles.ViewPicker}>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: '100%', fontFamily: "Ebrima", fontSize: 17, color: '#666' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Paucibacilar Indeterminada" value="java" />
            <Picker.Item label="Paucibalar Turberculóide" value="js" />
            <Picker.Item label="Multibacilar Dimorfa" value="js" />
            <Picker.Item label="Multibacilar Dimorfa Indetermiada" value="js" />
            <Picker.Item label="Multibacilar Dimorfa Virchowiana" value="js" />
            <Picker.Item label="Multibacilar Virchowiana" value="js" />
          </Picker>
        </View>
        {/* <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Nome do paciente'
          placeholderTextColor='#999'
          value={this.state.paciente}
          onChangeText={author => this.setState({ author })}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='CPF'
          placeholderTextColor='#999'
          value={this.state.cpf}
          onChangeText={place => this.setState({ place })}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='CEP'
          placeholderTextColor='#999'
          value={this.state.cep}
          onChangeText={place => this.setState({ place })}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Endereço'
          placeholderTextColor='#999'
          value={this.state.endereco}
          onChangeText={place => this.setState({ place })}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Bairro'
          placeholderTextColor='#999'
          value={this.state.bairro}
          onChangeText={place => this.setState({ place })}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Numero da casa'
          placeholderTextColor='#999'
          value={this.state.numCasa}
          onChangeText={place => this.setState({ place })}
        /> */}
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
          <TouchableOpacity style={styles.shareButton} onPress={this.handleSubmit}>
            <Text style={styles.shareButtonText}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton} onPress={this.handleSubmit}>
            <Text style={styles.shareButtonText}>Negar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // paddingTop: 30,
  },

  selectButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCC',
    borderStyle: 'dashed',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectButtonText: {
    fontSize: 16,
    color: '#666',
  },

  preview: {
    width: 360,
    height: 300,
    // marginTop: 10,
    alignSelf: 'center',
    borderRadius: 4,
    marginBottom: 20
  },

  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginTop: 10,
    fontSize: 16,
  },

  shareButton: {
    backgroundColor: '#7159c1',
    borderRadius: 4,
    height: 42,
    marginTop: 15,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },

  shareButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  },
  textAv: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: '#CCC',
    color: '#666'
  },
  ViewPicker: {
    borderWidth: 2,
    borderRadius: 8,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#CCC'
  }
});
