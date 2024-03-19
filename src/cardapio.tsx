import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Item {
    id: string;
    nome: string;
    preco: string;
    listaIngredientes:string;
     image: any;
    
}

const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.item}  >
        <Text style={styles.textColor}>{item.nome}</Text>
        <Text style={styles.precoColor}>{item.preco}</Text>
        <Text style={styles.textColor}>{item.listaIngredientes}</Text>
        <Image  source={item.image} style={styles.image}  />
       
    </TouchableOpacity>
)

const dados: Item[] = [
{id: "1", nome: "Luciano Burguer", preco: "R$14.00", listaIngredientes: "Pão brioche, Queijo cheddar, Blend 180g, Maionese da casa, Bacon", image: require('./assets/images/luciano.png')},
{id: "2", nome: "Calleri Burguer", preco: "R$22.00", listaIngredientes: "Pão brioche, Queijo cheddar,2 Blends 180g, Maionese da casa, Alface e Cebola Roxa, Bacon", image: require('./assets/images/calleri.png')},
{id: "3", nome: "Carpini Burguer", preco: "R$15.00", listaIngredientes: "Pão brioche, Queijo mussarela, Blend de Peito de Frango, Maionese da casa", image: require('./assets/images/carpini.png')},
{id: "4", nome: "Diego Costa Burguer", preco: "R$20.00", listaIngredientes: "Pão brioche, Queijo mussarela, 2 Blend de Peito de Frango, Maionese da casa",  image: require('./assets/images/costa.png')},
{id: "5", nome: "Arboleda Burguer", preco: "R$26.00", listaIngredientes: "Pão brioche, Queijo mussarela, 3 Blend de 180g, Maionese da casa, Bacon, Alface, Cebola Roxa",  image: require('./assets/images/arboleda.png')},
{id: "6", nome: "Wellington Rato Burguer", preco: "R$30.00", listaIngredientes: "Pão brioche, Queijo cheddar, 4 Blends de 180g, Maionese da casa, Alface e Cebola Roxa, Bacon",  image: require('./assets/images/rato.png')},
{id: "7", nome: "Lucas Burguer", preco: "R$30.00", listaIngredientes: "Pão brioche, Queijo cheddar, 2 Blend 180g defumado, Maionese da casa, Bacon, Alface, Cebola Roxa",image: require('./assets/images/lucas.png')} ,
{id: "8", nome: "Rafinha Burguer", preco: "R$17.00", listaIngredientes: "Pão brioche, Queijo mussarela, Blend 180g, Maionese da casa, Bacon, Cebola crispy", image: require('./assets/images/rafinha.png')},
{id: "9", nome: "James Burguer", preco: "R$27.00", listaIngredientes: "Pão brioche, Queijo cheddar, 2 Blend 180g defumado , Maionese da casa, Bacon", image: require('./assets/images/james.png')},
{id: "10", nome: "Casares Burguer", preco: "R$40.00", listaIngredientes: "Pão brioche, Queijo cheddar, 2 Blend 180g, Maionese da casa, Bacon, Presunto, Calabresa, Milho, Salcicha, Ervilha, Frango Desfiado, Tomate, Queijo Mussarela",  image: require('./assets/images/casares.png')},
{id: "11", nome: "Alisson Brownie", preco: "R$10.00", listaIngredientes: "Brownie 70% cacau com cobertura de creme de ninho",  image: require('./assets/images/alisson.png')},
{id: "12", nome: "Ferreirinha Brownie", preco: "R$15.00", listaIngredientes: "Brownie 70% cacau com cobertura de creme de ninho e uma bola de sorvete sabor vanila",  image: require('./assets/images/ferreirinha.png')},
{id: "13", nome: "Coca-Cola", preco: "R$5.00", listaIngredientes: "Coca-Cola de lata",  image: require('./assets/images/coca.png')},
{id: "14", nome: "São Paulo tea", preco: "R$12.00", listaIngredientes: "Delicioso chá feito de Flor Fada Azul, 500ml",  image: require('./assets/images/cha.png')},
{id: "15", nome: "Laranja Tricolor", preco: "R$14.00", listaIngredientes: "Delicioso suco de Laranja, 1L",  image: require('./assets/images/suco.png')},



];


function Cardapio(): React.JSX.Element {
    return (
        <View style={styles.container} >
        <StatusBar backgroundColor="red" barStyle='light-content'/>
        <View style={styles.header} >
        <Image source={require('./assets/images/spfc.png')}
            style={styles.headerImage}
            />
            <Text style={styles.headerText} >Hamburgueria Tricolor </Text>
            
            
        </View >
    
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
           
        
            />
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
            backgroundColor: 'black',
            color: 'white',
           padding:7,
        
        },
        item: {
            backgroundColor: '#ff0f27',
        padding: 30,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 25
        
        
        },
        header: {
            backgroundColor: 'black',
            alignItems: 'center',
            paddingVertical: 5,
        
        },
        image: {
            width: 200,
            height: 180,
          

        },
        headerText: {
            fontSize: 25,
            fontWeight: 'bold',
            color: 'yellow',
            fontStyle: 'italic'
        },
        textColor: {
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
            height: 30,
        
        },
        precoColor: {
            fontWeight: 'bold',
            color: 'yellow'
        },
        headerImage: {
            width: 400,
            height: 140,
            alignItems: 'center',
            marginTop: 'auto'   
        }

   
    });
    


export default Cardapio;
