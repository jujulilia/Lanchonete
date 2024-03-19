import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
            nome: "Pizza Coração" ,
            preco: "45,99",
            descricao: "Pepperoni, queijo, molho de tomate ",
            image: require('../assets/images/cake.png')

        },

        
        {
            id: "2" ,
            nome: "Pizza doce coração " ,
            preco: "45,99",
            descricao: "Pão, tomate, alface, queijo, carne, ",
            image: require('../assets/images/cake.png')

        },

        {
            id: "3" ,
            nome: "Empada Coração" ,
            preco: ",99",
            descricao: "Pão, tomate, alface, queijo, carne, ",
            image: require('../assets/images/cake.png')

        },

        {
            id: "4" ,
            nome: "Cupcake Shawn, o carneiro" ,
            preco: "9,99",
            descricao: "massa, chocolate, chantilli, pasta americana, ",
            image: require('../assets/images/cake.png')

        },

        {
            id: "5" ,
            nome: "Pastel Capivara" ,
            preco: "9,99",
            descricao: " tomate, alface, queijo, carne, presunto, queijo ",
            image: require('../assets/images/cake.png')

        },

        {
            id: "6" ,
            nome: "Pastel Dinossauro" ,
            preco: "9,99",
            descricao: "Presunto, queijo, tomate, alface, queijo, carne, ",
            image: require('../assets/images/cake.png')

        },

        {
            id: "7" ,
            nome: "Pizza Batman" ,
            preco: "44,99",
            descricao: "Pepperoni, molho de tomate, queijo",
            image: require('../assets/images/cake.png')

        },

        {
            id: "8" ,
            nome: "Bolo Pou" ,
            preco: "14,99",
            descricao: "Pão, tomate, alface, queijo, carne, ",
            image: require('../assets/images/cake.png')

        },

        {
            id: "9" ,
            nome: "Enroladinho porquinho" ,
            preco: "14,99",
            descricao: "Pão, tomate, alface, queijo, carne, ",
            image: require('../assets/images/cake.png')

        },

        {
            id: "10" ,
            nome: "Hamburguer" ,
            preco: "14,99",
            descricao: "Pão, tomate, alface, queijo, carne, ",
            image: require('../assets/images/cake.png')

        },

        {
            id: "11" ,
            nome: "Hamburguer" ,
            preco: "14,99",
            descricao: "Pão, tomate, alface, queijo, carne, ",
            image: require('../assets/images/cake.png')

        },

        {
            id: "12" ,
            nome: "Hamburguer" ,
            preco: "14,99",
            descricao: "Pão, tomate, alface, queijo, carne, ",
            image: require('../assets/images/cake.png')

        },

        {
            id: "13" ,
            nome: "Hamburguer" ,
            preco: "14,99",
            descricao: "Pão, tomate, alface, queijo, carne, ",
            image: require('../assets/images/cake.png')

        },

        {
            id: "14" ,
            nome: "Hamburguer" ,
            preco: "14,99",
            descricao: "Pão, tomate, alface, queijo, carne, ",
            image: require('../assets/images/cake.png')

        },
        
        {
            id: "15" ,
            nome: "Hamburguer" ,
            preco: "14,99",
            descricao: "Pão, tomate, alface, queijo, carne, ",
            image: require('../assets/images/cake.png')

           
        },
        
    ];


    const renderItem = ({item}: {item : MenuItem} ) => (
        <TouchableOpacity style={styles.item}>

            <Text>{item.nome}</Text>
            <Text>{item.preco}</Text>
            <Text>{item.descricao}</Text>

            <TouchableOpacity>
                <Image source ={item.image} style={styles.image}/>
            </TouchableOpacity>

        </TouchableOpacity>


    );

    

function CriarMenu(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#e0aaff" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat List</Text>
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

                
                
              
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    item: {
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
    },
    header: {
        backgroundColor: '#e0aaff',
        alignItems: 'center',
        paddingVertical: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
      borderTopWidth: 0.2,
      backgroundColor: 'white',
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
        width:80,
        height:80,
        marginBottom:20,
        marginTop: -65,
        marginLeft: 250
    }
});

export default CriarMenu;