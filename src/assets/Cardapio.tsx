import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

    interface MenuItem{
        id: string;
        nome: string;
        preco: string;
        ingredientes: string;
        image: any
        
    }
    const Cardapio = () => {
        const [dados, setDados] = useState<MenuItem[]>([]);
        const [error, setError] = useState<string | null>(null);
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://10.137.11.227:8000/api/produtos/all');
                    console.log('Dados recebidos da API:', response.data);
                    setDados(response.data.data);
                } catch (error) {
                    console.error('Erro ao buscar os dados:', error);
                    setError("Ocorreu um erro ao buscar os bolos");
                }
            };
    
            fetchData();
        }, []);
    
        useEffect(() => {
            console.log('Dados atualizados:', dados);
        }, [dados]);
    

    const renderItem = ({item}: {item : MenuItem} ) => (
        <TouchableOpacity style={styles.item}>
        <Text style={styles.nomeText} >{item.nome}</Text>
        <Text style={styles.tracoText}>__________________________________</Text>
            <Text style={styles.precoText}>{item.preco}</Text>
            <Text style={styles.ingredientesText}>{item.ingredientes}</Text>

            <TouchableOpacity>
                <Image source ={item.image} style={styles.image}/>
            </TouchableOpacity>
        </TouchableOpacity>

        
    );

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/cora.png')}  
            style={styles.fundo}> 

             <StatusBar backgroundColor="#DB496E" barStyle='light-content'/>
            <View style={styles.header} >
                <Image source={require('../assets/images/LOLO.png')} style={styles.logotipo}/>
                <View style={styles.alinhamentoPesquisa}>
                <Image source={require('../assets/images/lupa.png')} style={styles.lupa}/>
                <TextInput
                style={styles.input} placeholder="Pesquisar" 
                placeholderTextColor={'black'}/>
            </View> 
    </View>
            <FlatList
                data={dados}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item)=> item.id}
          />            
          
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
                </ImageBackground>
                
        </View>
        
    );
} 
   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  '#FFCED6'
        
    },

    nomeText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#4D1F18'
    },

    tracoText:{
      color: '#4D1F18'  
    },

    precoText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#4D1F18'
    },

    ingredientesText: {
        
        fontSize: 20,
        color: '#4D1F18'
    },

    item: {
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        borderColor: '#4D1F18',
        borderWidth: 2
    },
    lupa: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 8
    },
    input:{
        height:35,
        width: '90%',
        borderRadius: 30,
        borderColor: '#4D1F18',
        borderWidth: 1
        

    },

    alinhamentoPesquisa:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 10,
        width: '90%'
    },
   
    header: {
        backgroundColor: '#FFF8EB',
        alignItems: 'center',
        paddingVertical: 25,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
      borderTopWidth: 0.2,
      backgroundColor: '#FFF8EB',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10  
    },
    footerIcon: {
        width: 30,
        height: 30
    },
    image: {
        width:150,
        height:200,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10
    },

    logotipo: {
        width: 190,
        height: 150,
       
    },
    fundo: {
        flex: 1,
        justifyContent: 'center'
    },
});

export default Cardapio;