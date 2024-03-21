import React, { useState } from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Item {
    id: string;
    nome: string;
    preco: string;
    listaIngredientes:string;
     image: any;
    
}




const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        
        
        <Image  source={item.image} style={styles.quadradinho}  />
        <Text style={styles.textNome}>{item.nome}</Text>
        <Text style={styles.ingredientes}>{item.listaIngredientes}</Text>
        <Text style={styles.preco}>{item.preco}</Text>
       
       
       
    </TouchableOpacity>
)

const dados: Item[] = [
{id: "1", nome: "Lᴜᴄɪᴀɴᴏ Bᴜʀɢᴜᴇʀ", preco: "$14.00", listaIngredientes: "𝙿𝚊̃𝚘 𝚋𝚛𝚒𝚘𝚌𝚑𝚎, 𝚀𝚞𝚎𝚒𝚓𝚘 𝚌𝚑𝚎𝚍𝚍𝚊𝚛, 𝙱𝚕𝚎𝚗𝚍 𝟷𝟾𝟶𝚐, 𝙼𝚊𝚒𝚘𝚗𝚎𝚜𝚎 𝚍𝚊 𝚌𝚊𝚜𝚊, 𝙱𝚊𝚌𝚘𝚗", image: require('./assets/images/luciano.png')},
{id: "2", nome: "Cᴀʟʟᴇʀɪ Bᴜʀɢᴜᴇʀ", preco: "$22.00", listaIngredientes: "𝙿𝚊̃𝚘 𝚋𝚛𝚒𝚘𝚌𝚑𝚎, 𝚀𝚞𝚎𝚒𝚓𝚘 𝚌𝚑𝚎𝚍𝚍𝚊𝚛,𝟸 𝙱𝚕𝚎𝚗𝚍𝚜 𝟷𝟾𝟶𝚐, 𝙼𝚊𝚒𝚘𝚗𝚎𝚜𝚎 𝚍𝚊 𝚌𝚊𝚜𝚊, 𝙰𝚕𝚏𝚊𝚌𝚎 𝚎 𝙲𝚎𝚋𝚘𝚕𝚊 𝚁𝚘𝚡𝚊, 𝙱𝚊𝚌𝚘𝚗", image: require('./assets/images/calleri.png')},
{id: "3", nome: "Cᴀʀᴘɪɴɪ Bᴜʀɢᴜᴇʀ", preco: "$15.00", listaIngredientes: "𝙿𝚊̃𝚘 𝚋𝚛𝚒𝚘𝚌𝚑𝚎, 𝚀𝚞𝚎𝚒𝚓𝚘 𝚖𝚞𝚜𝚜𝚊𝚛𝚎𝚕𝚊, 𝙱𝚕𝚎𝚗𝚍 𝚍𝚎 𝙿𝚎𝚒𝚝𝚘 𝚍𝚎 𝙵𝚛𝚊𝚗𝚐𝚘, 𝙼𝚊𝚒𝚘𝚗𝚎𝚜𝚎 𝚍𝚊 𝚌𝚊𝚜𝚊", image: require('./assets/images/carpini.png')},
{id: "4", nome: "Diego Costa Burguer", preco: "$20.00", listaIngredientes: "𝙿𝚊̃𝚘 𝚋𝚛𝚒𝚘𝚌𝚑𝚎, 𝚀𝚞𝚎𝚒𝚓𝚘 𝚖𝚞𝚜𝚜𝚊𝚛𝚎𝚕𝚊, 𝟸 𝙱𝚕𝚎𝚗𝚍 𝚍𝚎 𝙿𝚎𝚒𝚝𝚘 𝚍𝚎 𝙵𝚛𝚊𝚗𝚐𝚘, 𝙼𝚊𝚒𝚘𝚗𝚎𝚜𝚎 𝚍𝚊 𝚌𝚊𝚜𝚊",  image: require('./assets/images/costa.png')},
{id: "5", nome: "Dɪᴇɢᴏ Cᴏsᴛᴀ Bᴜʀɢᴜᴇʀ", preco: "$26.00", listaIngredientes: "𝙿𝚊̃𝚘 𝚋𝚛𝚒𝚘𝚌𝚑𝚎, 𝚀𝚞𝚎𝚒𝚓𝚘 𝚖𝚞𝚜𝚜𝚊𝚛𝚎𝚕𝚊, 𝟹 𝙱𝚕𝚎𝚗𝚍 𝚍𝚎 𝟷𝟾𝟶𝚐, 𝙼𝚊𝚒𝚘𝚗𝚎𝚜𝚎 𝚍𝚊 𝚌𝚊𝚜𝚊, 𝙱𝚊𝚌𝚘𝚗, 𝙰𝚕𝚏𝚊𝚌𝚎, 𝙲𝚎𝚋𝚘𝚕𝚊 𝚁𝚘𝚡𝚊",  image: require('./assets/images/arboleda.png')},
{id: "6", nome: "Wᴇʟʟɪɴɢᴛᴏɴ Rᴀᴛᴏ Bᴜʀɢᴜᴇʀ", preco: "$30.00", listaIngredientes: "𝙿𝚊̃𝚘 𝚋𝚛𝚒𝚘𝚌𝚑𝚎, 𝚀𝚞𝚎𝚒𝚓𝚘 𝚌𝚑𝚎𝚍𝚍𝚊𝚛, 𝟺 𝙱𝚕𝚎𝚗𝚍𝚜 𝚍𝚎 𝟷𝟾𝟶𝚐, 𝙼𝚊𝚒𝚘𝚗𝚎𝚜𝚎 𝚍𝚊 𝚌𝚊𝚜𝚊, 𝙰𝚕𝚏𝚊𝚌𝚎 𝚎 𝙲𝚎𝚋𝚘𝚕𝚊 𝚁𝚘𝚡𝚊, 𝙱𝚊𝚌𝚘𝚗",  image: require('./assets/images/rato.png')},
{id: "7", nome: "Lᴜᴄᴀs Bᴜʀɢᴜᴇʀ", preco: "$30.00", listaIngredientes: "𝙿𝚊̃𝚘 𝚋𝚛𝚒𝚘𝚌𝚑𝚎, 𝚀𝚞𝚎𝚒𝚓𝚘 𝚌𝚑𝚎𝚍𝚍𝚊𝚛, 𝟸 𝙱𝚕𝚎𝚗𝚍 𝟷𝟾𝟶𝚐 𝚍𝚎𝚏𝚞𝚖𝚊𝚍𝚘, 𝙼𝚊𝚒𝚘𝚗𝚎𝚜𝚎 𝚍𝚊 𝚌𝚊𝚜𝚊, 𝙱𝚊𝚌𝚘𝚗, 𝙰𝚕𝚏𝚊𝚌𝚎, 𝙲𝚎𝚋𝚘𝚕𝚊 𝚁𝚘𝚡𝚊",image: require('./assets/images/lucas.png')} ,
{id: "8", nome: "Rᴀғɪɴʜᴀ Bᴜʀɢᴜᴇʀ", preco: "$17.00", listaIngredientes: "𝙿𝚊̃𝚘 𝚋𝚛𝚒𝚘𝚌𝚑𝚎, 𝚀𝚞𝚎𝚒𝚓𝚘 𝚖𝚞𝚜𝚜𝚊𝚛𝚎𝚕𝚊, 𝙱𝚕𝚎𝚗𝚍 𝟷𝟾𝟶𝚐, 𝙼𝚊𝚒𝚘𝚗𝚎𝚜𝚎 𝚍𝚊 𝚌𝚊𝚜𝚊, 𝙱𝚊𝚌𝚘𝚗, 𝙲𝚎𝚋𝚘𝚕𝚊 𝚌𝚛𝚒𝚜𝚙𝚢", image: require('./assets/images/rafinha.png')},
{id: "9", nome: "Jᴀᴍᴇs Bᴜʀɢᴜᴇʀ", preco: "$27.00", listaIngredientes: "𝙿𝚊̃𝚘 𝚋𝚛𝚒𝚘𝚌𝚑𝚎, 𝚀𝚞𝚎𝚒𝚓𝚘 𝚌𝚑𝚎𝚍𝚍𝚊𝚛, 𝟸 𝙱𝚕𝚎𝚗𝚍 𝟷𝟾𝟶𝚐 𝚍𝚎𝚏𝚞𝚖𝚊𝚍𝚘 , 𝙼𝚊𝚒𝚘𝚗𝚎𝚜𝚎 𝚍𝚊 𝚌𝚊𝚜𝚊, 𝙱𝚊𝚌𝚘𝚗", image: require('./assets/images/james.png')},
{id: "10", nome: "Cᴀsᴀʀᴇs Bᴜʀɢᴜᴇʀ", preco: "$40.00", listaIngredientes: "𝙿𝚊̃𝚘 𝚋𝚛𝚒𝚘𝚌𝚑𝚎, 𝚀𝚞𝚎𝚒𝚓𝚘 𝚌𝚑𝚎𝚍𝚍𝚊𝚛, 𝟸 𝙱𝚕𝚎𝚗𝚍 𝟷𝟾𝟶𝚐, 𝙼𝚊𝚒𝚘𝚗𝚎𝚜𝚎 𝚍𝚊 𝚌𝚊𝚜𝚊, 𝙱𝚊𝚌𝚘𝚗, 𝙿𝚛𝚎𝚜𝚞𝚗𝚝𝚘, 𝙲𝚊𝚕𝚊𝚋𝚛𝚎𝚜𝚊, 𝙼𝚒𝚕𝚑𝚘, 𝚂𝚊𝚕𝚌𝚒𝚌𝚑𝚊, 𝙴𝚛𝚟𝚒𝚕𝚑𝚊, 𝙵𝚛𝚊𝚗𝚐𝚘 𝙳𝚎𝚜𝚏𝚒𝚊𝚍𝚘, 𝚃𝚘𝚖𝚊𝚝𝚎, 𝚀𝚞𝚎𝚒𝚓𝚘 𝙼𝚞𝚜𝚜𝚊𝚛𝚎𝚕𝚊",  image: require('./assets/images/casares.png')},
{id: "11", nome: "Aʟɪssᴏɴ Bʀᴏᴡɴɪᴇ", preco: "$10.00", listaIngredientes: "𝙱𝚛𝚘𝚠𝚗𝚒𝚎 𝟽𝟶% 𝚌𝚊𝚌𝚊𝚞 𝚌𝚘𝚖 𝚌𝚘𝚋𝚎𝚛𝚝𝚞𝚛𝚊 𝚍𝚎 𝚌𝚛𝚎𝚖𝚎 𝚍𝚎 𝚗𝚒𝚗𝚑𝚘",  image: require('./assets/images/alisson.png')},
{id: "12", nome: "Fᴇʀʀᴇɪʀɪɴʜᴀ Bʀᴏᴡɴɪᴇ", preco: "$15.00", listaIngredientes: "𝙱𝚛𝚘𝚠𝚗𝚒𝚎 𝟽𝟶% 𝚌𝚊𝚌𝚊𝚞 𝚌𝚘𝚖 𝚌𝚘𝚋𝚎𝚛𝚝𝚞𝚛𝚊 𝚍𝚎 𝚌𝚛𝚎𝚖𝚎 𝚍𝚎 𝚗𝚒𝚗𝚑𝚘 𝚎 𝚞𝚖𝚊 𝚋𝚘𝚕𝚊 𝚍𝚎 𝚜𝚘𝚛𝚟𝚎𝚝𝚎 𝚜𝚊𝚋𝚘𝚛 𝚟𝚊𝚗𝚒𝚕𝚊",  image: require('./assets/images/ferreirinha.png')},
{id: "13", nome: "Cᴏᴄᴀ-Cᴏʟᴀ", preco: "$5.00", listaIngredientes: "𝙳𝚎𝚕𝚒𝚌𝚒𝚘𝚜𝚊 𝙲𝚘𝚌𝚊 𝙲𝚘𝚕𝚊, 𝚙𝚎𝚛𝚏𝚎𝚒𝚝𝚊 𝚌𝚘𝚖𝚘 𝚋𝚎𝚋𝚒𝚍𝚊 𝚙𝚊𝚛𝚊 𝚜𝚎𝚞 𝚖𝚊𝚛𝚊𝚟𝚒𝚕𝚑𝚘𝚜𝚘 𝚕𝚊𝚗𝚌𝚑𝚎",  image: require('./assets/images/coca.png')},
{id: "14", nome: "Sᴀ̃ᴏ Pᴀᴜʟᴏ Tᴇᴀ", preco: "$12.00", listaIngredientes: "𝙳𝚎𝚕𝚒𝚌𝚒𝚘𝚜𝚘 𝚌𝚑𝚊́ 𝚏𝚎𝚒𝚝𝚘 𝚍𝚎 𝙵𝚕𝚘𝚛 𝙵𝚊𝚍𝚊 𝙰𝚣𝚞𝚕, 𝟻𝟶𝟶𝚖𝚕",  image: require('./assets/images/cha.png')},
{id: "15", nome: "Lᴀʀᴀɴᴊᴀ Tʀɪᴄᴏʟᴏʀ", preco: "$14.00", listaIngredientes: "𝙳𝚎𝚕𝚒𝚌𝚒𝚘𝚜𝚘 𝚜𝚞𝚌𝚘 𝚍𝚎 𝙻𝚊𝚛𝚊𝚗𝚓𝚊, 𝚟𝚒𝚗𝚍𝚘 𝚗𝚞𝚖𝚊 𝚓𝚊𝚛𝚛𝚊 𝚍𝚎 𝟼𝟻𝟶𝚖𝚕, 𝚙𝚎𝚛𝚏𝚎𝚒𝚝𝚘 𝚙𝚊𝚛𝚊 𝚊𝚌𝚘𝚖𝚙𝚊𝚗𝚑𝚊𝚛 𝚜𝚎𝚞 𝚕𝚊𝚗𝚌𝚑𝚎.",  image: require('./assets/images/suco.png')},

];




function Cardapio(): React.JSX.Element {
    return (
        <View style={styles.container} >
            <ImageBackground source={require('./assets/images/spfcTorcida.png')} style={styles.imageBg} >
        <StatusBar backgroundColor="red" barStyle='light-content'/>
        <View style={styles.header} >
        <Image source={require('./assets/images/spfcHeader.png')}
            style={styles.headerImage}
            />
         
        </View >
    
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={dados}
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
          
        </View>
        </View>
    )
    }
    const styles = StyleSheet.create ({
    
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
            borderRadius:39,
            resizeMode: 'center',
            backgroundColor: 'red'

        }
       

   
    });
    


export default Cardapio;

