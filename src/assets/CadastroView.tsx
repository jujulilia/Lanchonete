import React, { useState } from "react";
import{Image, StyleSheet, Text, TextInput,StatusBar, Touchable, TouchableOpacity, View} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";



function CriarLogin(): JSX.Element {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    

    function login(){
        const dados ={
            email :email,
            password: password,

            
        }

        console.log(dados);
    }

    
    
    return(
        <View style={styles.container}>
            
            <Image style={styles.logo}
             resizeMode="contain"
            source={require('../assets/images/LOLO.png')}/>
            <StatusBar backgroundColor="#DB496E" barStyle='light-content'/>
            
        
        <View style={styles.card}>
            <Text style={styles.title}>Login Cliente</Text>

            <TextInput
            style={styles.input}
             placeholder="E-mail"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
       
            <TextInput 
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={"#000000"}
            onChangeText={(textPassword)=> setPassword(textPassword)}
            secureTextEntry
            />

            <TouchableOpacity style={styles.button}
                onPress={()=>{login()}}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                <Text style={styles.forgotPassword}> Não possui conta? Cadastre-se!</Text>
                </TouchableOpacity>

        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    logo:{
        width:200,
        height:100,
        marginBottom:20,
        marginTop: -150
    },

    card: {
        backgroundColor: '#FFCED6',
        width: 320,
        borderRadius: 40,
        borderColor: '#4D1F18',
        borderWidth: 2,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0,3)',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.8,
        shadowRadius: 2,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4D1F18',
        marginBottom: 20,
        textAlign: 'center',
    },
    input:{
        backgroundColor: '#fff',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 19,
        borderRadius:8,
        borderWidth: 2,
        borderColor: '#4D1F18'
    },
    button:{
        backgroundColor: 'pink',
        height:40,
        borderRadius:8,
        borderColor: '#fff',
        borderWidth: 2

        
    },
    buttonText:{
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
    },
    forgotPassword:{
        color: '#ffffff',
        textAlign: 'center',
        marginTop:10,
    }
})

export default CriarLogin;