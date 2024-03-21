import React from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

    interface MenuItem{
        id: string;
        nome: string;
        preco: string;
        descricao: string;
        image: any
        
    }

    const dados: MenuItem[] =[
        {
            id: "1" ,
            nome: "Pizza doce coração " ,
            preco: " R$45,99",
            descricao: "Sabor chocolate, chocolate branco ou moramngo. ",
            image: require('../assets/images/pizzaD.png')

        },

        
        {
            id: "2" ,
            nome: "Torta de morango" ,
            preco: "R$45,99",
            descricao: "Torta sabor morango.",
            image: require('../assets/images/torta.png')

        },

        {
            id: "3" ,
            nome: "Biscoitos de urso" ,
            preco: "R$5,99",
            descricao: "5 unidades, sabor chocolate ou baunilha. ",
            image: require('../assets/images/urso.png')

        },

        {
            id: "4" ,
            nome: "Biscoitos de tartaruga" ,
            preco: "R$5,99",
            descricao: "5 unidades, sabor chocolate ou baunilha. ",
            image: require('../assets/images/tartaruga.png')

        },

        {
            id: "5" ,
            nome: "Biscoitos de gato " ,
            preco: "R$5,99",
            descricao: "5 unidades, sabor chocolate ou baunilha.",
            image: require('../assets/images/gato.png')

        },

        {
            
            id: "6" ,
            nome: "Biscoitinhos " ,
            preco: "R$5,99",
            descricao: "5 unidades, sabor chocolate ou baunilha.",
            image: require('../assets/images/biscoitinhos.png')

        },

        {
            id: "7" ,
            nome: "Cookie de Coração" ,
            preco: "R$8,00",
            descricao: "4 unidades, sabor chocolate. ",
            image: require('../assets/images/cookie.png')
           
           
        },

        {
            id: "8" ,
            nome: "Rocambole" ,
            preco: "R$13,00",
            descricao: "Rocambole de chocolate e leite ninho. ",
            image: require('../assets/images/rocambole.png')
        },

        {
            
            id: "9" ,
            nome: "Cupcake Shaun, o carneiro" ,
            preco: "R$7,99",
            descricao: "Uma unidade, sabor chocolate, baunilha ou morango.",
            image: require('../assets/images/ovelha.png')

        },

        {
            id: "10" ,
            nome: "Panqueca" ,
            preco: "R$10,00",
            descricao: "Panquecas com morango, chocolate ou mel. ",
            image: require('../assets/images/panqueca.png')


        },

        {
           
            id: "11" ,
            nome: "Bolo de chocolate" ,
            preco: "R$45,00",
            descricao: "Bolo sabor chocolate decorado com morangos. ",
            image: require('../assets/images/chocolate.png')

        },

        {
             id: "12" ,
            nome: "Bolo de morango" ,
            preco: "R$45,00",
            descricao: "Bolo sabor morango com chantilli. ",
            image: require('../assets/images/moranguinho.png')


        },

        {
            id: "13" ,
            nome: "Bolo da vaca" ,
            preco: "R$50,00",
            descricao: "Bolo de Chocolate, chocolate branco, leite ninho e morango. ",
            image: require('../assets/images/vaca.png')


        },

        {
            id: "14" ,
            nome: "Bolo Roblox de aniversário" ,
            preco: "R$14,99",
            descricao: "Bolo de Chocolate, chocolate branco, leite ninho e morango.",
            image: require('../assets/images/aniversario.png')

        },
        
        {
            id: "15" ,
            nome: "Bolo Pou" ,
            preco: "R$9,99",
            descricao: "Bolo de Chocolate, chocolate branco, leite ninho e morango. ",
            image: require('../assets/images/Pou.png')

           
        },
        
    ];


    const renderItem = ({item}: {item : MenuItem} ) => (
        <TouchableOpacity style={styles.item}>
        <Text style={styles.nomeText} >{item.nome}</Text>
        <Text style={styles.tracoText}>__________________________________</Text>
            <Text style={styles.precoText}>{item.preco}</Text>
            <Text style={styles.descricaoText}>{item.descricao}</Text>

            <TouchableOpacity>
                <Image source ={item.image} style={styles.image}/>
            </TouchableOpacity>

        </TouchableOpacity>


    );

    

function CriarMenu(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/cora.png')}  
            style={styles.fundo}>         
             <StatusBar backgroundColor="#DB496E" barStyle='light-content'/>
            <View style={styles.header}
            >
                <Image source={require('../assets/images/LOLO.png')} style={styles.logotipo}/>
                { <View style={styles.alinhamentoPesquisa}>
                <Image source={require('../assets/images/lupa.png')} style={styles.lupa}/>

                <TextInput
                style={styles.input} placeholder="Pesquisar" 
                placeholderTextColor={'black'}/>
            </View> }


            </View>

            {/* { <View style={styles.alinhamentoPesquisa}>
                <Image source={require('../assets/images/lupa.png')} style={styles.lupa}/>

                <TextInput
                style={styles.input} placeholder="Pesquisar" 
                placeholderTextColor={'black'}/>
            </View> } */}

            <FlatList
                data={dados}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item)=> item.id}
            />

            </ImageBackground>
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

                
                
              
            </View>
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

    descricaoText: {
        
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
       // backgroundColor: 'pink',
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
    //ff8fa3
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

export default CriarMenu;