//IMPOTAÇÃO DAS BIBLIOTECAS 
import React, {useState} from 'react';

//IMPORTAÇÃO DOS COMPONETES USADOS NA APLICAÇÃO
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

//IMPORTAÇÃO DAS IMAGENS 
import Logo from './assets/logo.png';

//CODIGO DE EXIBIÇÃO DOS COMPONENTES 
export default function App() {

  //
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  
  return (
    <View style={ style.container }>

      <Image style={ style.img } source={ Logo } />

      <Text style={ style.titulo }>Controle de Acesso Vivo</Text>

      <Text style={ style.cadastro }>Cadastro</Text>
     
      <TextInput placeholder= "Nome:" style={style.textInput}/>
      <TextInput placeholder= "Cpf:" style={style.textInput}/>
      <TextInput placeholder= "Endereço:" style={style.textInput}/>
      <TextInput placeholder= "Telefone:" style={style.textInput}/>
      <TextInput placeholder= "Apartamento:" style={style.textInput}/>
      <TextInput placeholder= "Bloco:" style={style.textInput}/>

      <TouchableOpacity>
      <Text>Enviar</Text>
      </TouchableOpacity>
      
      

     
    </View>
  );
}

//CRIAÇÃO DA VARIVEL ESTILOS PARA RECEBER A ESTILIZAÇÃO DOS COMPONETES
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20
      
  },

  cadastro: {
    fontSize: 25,
    color: 'red',
    marginBottom: 20
      
  },


  textInput:{
    width:"70%",
    height: 40,
    backgroundColor:'red',
    borderRadius: 20,
    paddingLeft:10,
    marginBottom: 20,
    borderColor: 'black'
    
  },

 img:{
  width: '100%',
  height: '16%',
  marginBottom: 1

 },

 btncadastro:{
   marginBottom: 30

 }


 
});