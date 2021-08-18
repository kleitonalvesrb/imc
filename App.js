import React, { useState } from 'react';
import { View, Text, ImageBackground,StyleSheet, TextInput, TouchableOpacity} from 'react-native';


const App = () =>{
    const [peso, setpeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');

    const calcular = () =>{
      if(peso && altura){
        const pesoTemp = parseFloat(peso);
        const alturaTemp = parseFloat(altura);
        const resultadoTemp = (pesoTemp / (alturaTemp * alturaTemp));
        if(resultadoTemp < 18.5){
            setResultado('Magreza seu IMC é '+resultadoTemp.toFixed(2))
        }else if(resultadoTemp >= 18.5 && resultadoTemp <= 24.9){
            setResultado('Normal seu IMC é '+resultadoTemp.toFixed(2))
        }else if(resultadoTemp >= 25.0 && resultadoTemp <= 29.9){
          setResultado('Sobrepeso, seu IMC é '+resultadoTemp.toFixed(2))
        }else if(resultadoTemp >= 30 && resultadoTemp <= 39.9){
          setResultado('Obesidade seu IMC é '+resultadoTemp.toFixed(2))
        }else{
          setResultado('Obesidade Grave seu IMC é '+resultadoTemp.toFixed(2))
        }
      }else{
        alert('Informar o peso e a altura')
      }
    }

  return (
    <ImageBackground 
    style={{
      width : '100%',
      height : '100%'
    }}
    source={{
      uri : 'https://www.einstein.br/Documentos%20Compartilhados/infograficos/mapa-corpo-humano/images/body-bg.jpg'
    }}>
      <View style={style.viewTitulo}>
        <Text style={style.titulo}>IMC</Text>
      </View>
      <View style={style.viewTitulo}>
        <Text style={style.descricao}>índice de massa corporal (IMC)</Text>
      </View>
      <View style={style.viewConteudo}>
        <TextInput
          placeholder = 'Digite sua altura, Ex: 1.75'
          keyboardType='numeric'
          onChangeText={(valueAltura)=>setAltura(valueAltura)}
        style={style.input}/>

        <TextInput
          placeholder = 'Digite seu peso, Ex: 89.9'
          keyboardType='numeric'
          onChangeText={(valuePeso)=>setpeso(valuePeso)}
        style={style.input}/>

        <TouchableOpacity
           style={{marginTop: '10%'}}
          onPress={calcular}   
        >
          <Text style={style.descricao}>Calcular</Text>
        </TouchableOpacity>

        <Text style={style.resultado}>{resultado}</Text>
        
        

      </View>
    </ImageBackground>
  );
}

export default App;

const style = StyleSheet.create({
  titulo : {
    fontSize : 50,
    color : 'black',
    fontWeight: 'bold',
    alignContent : 'center'
  },
  descricao : {
    fontWeight : 'bold',
    fontSize : 16,
    justifyContent: 'space-evenly'
  },
  viewTitulo : {
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    paddingVertical : 20
  },
  viewConteudo : {
    paddingHorizontal: 30,
    alignItems : 'center'
  },
  input : {
    backgroundColor : '#DADADA',
    width: '80%',
    marginVertical: 10
  },
  resultado :{
    fontSize: 22,
    fontWeight : 'bold',
    marginVertical: 20
  }
})