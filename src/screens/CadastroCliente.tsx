import React, { useState } from "react";
import {Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroCliente: React.FC = () => {
    const[clientes, setclietes] = useState<Cliente[]>([]);
    const[nome, setNome] = useState<string>('');
    const[endereco, setEndereco] = useState<string>('');
    const[email, setEmail] = useState<string>('');
    const[telefone, setTelefone] = useState<string>('');
    const[cpf, setCpf] = useState<string>('');
    const[password, setPassword] = useState<string>('');
    const[imagem, setImagem] = useState<any>('');

    const CadastrarCliente = async() => {
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('endereco', endereco);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('cpf', cpf);
        formData.append('password', password);

        formData.append('imagem', {
            uri: imagem,
            type: 'image/jpeg',
            name: new Date() + '.jpg'
        }); 

        const response = await axios.post('http://10.137.11.227:8000/api/clientes', formData,{
            headers: {
                'content-Type': 'multipart/form-data'
            }
        });
    }catch(error){
        console.log(error);
    }
    
    }

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response =>{
            if (response.didCancel){
                console.log('Cancelado pelo usuário');
            }else if(response.error){
                console.log('Erro ao abrir câmera');
            }else{
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        })
    }

    const selecionarImagem = () => {
        const options ={
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };
        launchImageLibrary(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuario');
              } else if(response.error){
                  console.log('erro ao abrir a camera');
              }else {
                  let imageUri = response.uri || response.assets?.[0]?.uri;
                  setImagem(imageUri);
                  console.log(imageUri);
              }
          });
      }

    return (

        <ScrollView>
           
        <View style ={styles.container}>

         

            <StatusBar backgroundColor="#DB496E" barStyle="light-content"/>
            <View style={styles.header}>
                
            <Image source={require('../assets/images/LOLO.png')} style={styles.logotipo}/>

            <Text style={styles.headerText}>Cadastro de Cliente</Text>
                <StatusBar backgroundColor="#DB496E" barStyle='light-content'/>


            </View>
            

            <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{uri: imagem}} style={styles.imagemSelecionada}/> : null}
                </View>
             

            <View style={styles.form}>
                <TextInput
                style={styles.input} 
                placeholder="Nome " 
                value={nome}
                onChangeText={setNome}/>

                <TextInput
                style={styles.input} 
                placeholder="Endereco" 
                value={endereco}
                onChangeText={setEndereco}/>

                <TextInput 
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail} />

                <TextInput
                style={styles.input}
                placeholder="Telefone"
                value ={telefone}
                onChangeText={setTelefone}/>
                 

                 <TextInput
                style={styles.input} 
                placeholder="CPF" 
                value={cpf}
                onChangeText={setCpf}/>

                <TextInput
                style={styles.input} 
                placeholder="Senha" 
                value={password}
                onChangeText={setPassword}/>

                
                
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                    <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar Foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={CadastrarCliente}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                   
            </View>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                    source={require('../assets/images/casa.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../assets/images/entrega.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../assets/images/perfil.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../assets/images/cardapiupiu.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../assets/images/carrinho.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>
                </View>

    

        </View>
        </ScrollView>
    );

        
}
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        header: {
            backgroundColor: 'pink',
            paddingVertical: 10,
            alignItems: 'center'
        },
       
        headerText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white'
        },
        footer: {
            backgroundColor: '#ffff',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderTopRightRadius: 30,
            borderTopLeftRadius:30,
            padding: 15
         },
          footerIcon: {
              width: 30,
              height: 30
          },
        form: {
            padding: 10,
            backgroundColor: '#f0f0f0',
            marginBottom: 10,
            paddingVertical: 98
        },
        input: {
            height: 40,
            borderColor: '#4D1F18',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderRadius: 11
        },
        imageButton: {
            backgroundColor: '#4D1F18',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            marginBottom: 10
        },
        imageButtonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        imagemSelecionada: {
            width: 200,
            height: 200,
            resizeMode: 'cover',
            borderRadius: 150,
            marginBottom: 10
        },
        alinhamentoImagemSelecionada: {
            alignItems: 'center'
        },
        logotipo: {
            width: 190,
            height: 150,
           
        },
        button: {
            backgroundColor: '#4D1F18',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        fundo: {
            flex: 1,
            justifyContent: 'center'
        },
    });


export default CadastroCliente;