import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import {Slider} from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
      genero: null,
      generos: [
        {key: 1, nome: "Feminino"},
        {key: 2, nome: "Masculino"},
      ]
    };
  };
  
  render() {
    let generosItem = this.state.generos.map( (v, k)=>{
      return <Picker.Item key={k} label={v.nome}/>
  })

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Banco React</Text>
        <Text style={styles.form}> Formulário de Cadastro</Text>
        <View style={styles.formulario}> 
          <TextInput>Nome completo: </TextInput>
          <TextInput>Idade: </TextInput>
          <Text>Sexo</Text>
          <Picker selectedValue={this.state.genero} onValueChange={(itemValue, itemIndex) => this.setState({genero: itemValue})}> 
            {generosItem}
          </Picker>
          <Text>Limite</Text>
          <Slider minimumValue={0} 
                maximumValue={100} 
                onValueChange={(valorSelecinado) => this.setState({valor:valorSelecinado})}
                value={this.state.valor}/>
          <Text>O limite</Text>

        </View>
      </View>
    );
  }
}

  // ESTILOS PARA APLICAR
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    titulo:{
      backgroundColor: '#ff0000',
      textAlign:"center",
      color: "#fff",
      fontSize:42,
      paddingTop:20,
      marginBottom:15,
    },

    form:{
      textAlign:"center",
      fontSize: 20,
      fontWeight:"bold",
      marginBottom: 15,
    },

    formulario:{
      alignItems: 'center',
      fontSize: 18,  
    },

  }); export default App;