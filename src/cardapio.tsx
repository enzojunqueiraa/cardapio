
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Item {
    id: string;
    nome: string;
    preco: string;
    listaIngredientes: string;
    image: any;


}
const add = require('./assets/images/add.png');


let keyCounter = 0;

const renderItem = ({ item }: { item: Item }) => {
    keyCounter++;
    return (
    <View style={styles.itemContainer} key={keyCounter}>
    {}
        <TouchableOpacity style={styles.item}>
          {item.image ? <Image source={{uri: item.image}} style={styles.quadradinho} /> : <Image source={require('./assets/images/calleri.png')} style={styles.addIcon} />} 
            <View>
                { item.nome ? <Text style={styles.textNome}>{item.nome}</Text> :  <Text> </Text> } 
                { item.listaIngredientes ? <Text style={styles.ingredientes}>{item.listaIngredientes}</Text> : <Text></Text> }
                { item.preco ? <Text style={styles.preco}>{item.preco}</Text> : <Text> </Text> }
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
            <Image source={add} style={styles.addIcon} />

        </TouchableOpacity>

    </View>
    );
};


function Cardapio(): React.JSX.Element {
    const [item, setItem] = useState<Item[]>([])
    const [dados, setDados] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
           const response=  await  axios.get<Item[]>('http://10.137.11.226:8000/api/produtos/all');
           setItem(response.data);
                 
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <View style={styles.container} >
            <ImageBackground source={require('./assets/images/spfcTorcida.png')} style={styles.imageBg} >
                <StatusBar backgroundColor="red" barStyle='light-content' />
                <View style={styles.header} >
                    <Image source={require('./assets/images/spfcHeader.png')}
                        style={styles.headerImage}
                    />

                </View >

                <FlatList
                    data={item}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

            </ImageBackground >
            <View style={styles.footer}>
                <TouchableOpacity >
                    <Image source={require('./assets/images/home.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image source={require('./assets/images/orders.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image source={require('./assets/images/menuMenor.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image source={require('./assets/images/profile.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('./assets/images/carrinho.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>


            </View>
        </View>
    );

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'silver',

    },

    item: {
        backgroundColor: 'black',
        padding: 45,
        marginVertical: 8,
        marginHorizontal: 13,
        borderRadius: 15,

    },
    header: {
        backgroundColor: 'black',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

    },
    image: {
        width: 190,
        height: 173,
        marginRight: 'auto',

    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic'

    },
    textNome: {
        fontWeight: 'bold',
        color: '#f6be5f',
        fontStyle: 'italic',
        marginStart: 'auto',
        fontSize: 19

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30

    },
    footerIcon: {
        width: 30,
        height: 30,

    },
    preco: {
        fontWeight: 'bold',
        color: 'yellow',
        marginLeft: 'auto',
        fontSize: 16

    },
    headerImage: {
        width: 400,
        height: 140,
        alignItems: 'center',
        marginTop: 'auto'

    },
    ingredientes: {
        color: "white",
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 'auto',
        fontFamily: 'Star Wars'

    },
    imageBg: {
        flex: 1,
        justifyContent: 'center',

    },
    quadradinho: {
        width: 300,
        height: 125,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 39,
        resizeMode: 'center',
        backgroundColor: 'red'

    },
    addIcon: {
        width: 30,
        height: 30
    },
    addButton: {
        position: 'absolute',
        right: 10,
        bottom: 10
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 8

    }



});



export default Cardapio;


