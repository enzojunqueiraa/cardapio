import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Item {
  id: string;
  nome: string;
  preco: number;
  ingredientes: string;
  imagem: any;
}

const add = require("./assets/images/add.png");

const Cardapio: React.FC = () => {
  const [item, setItem] = useState<Item[]>([]);
  const [carrinho, setCarrinho] = useState<{ [key: string]: number }>({});
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Item[]>("http://10.137.11.226:8000/api/produtos/all");
        setItem(response.data);
      } catch (error) {
        console.log(error);
        return [];
      }
    }

    fetchData();
  }, []);

  const adicionarAoCarrinho = (item: Item) => {
    if (carrinho[item.id]) {
      setCarrinho({ ...carrinho, [item.id]: carrinho[item.id] + 1 });
    } else {
      setCarrinho({ ...carrinho, [item.id]: 1 });
      
    }
    setMensagemSucesso('Produto adicionado com sucesso');
    return carrinho;

    
  };

  const totalCarrinho = Object.values(carrinho).reduce((total, quantidade) => total + quantidade, 0);

  const renderItem = ({ item }: { item: Item }) => {
    const precoFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(item.preco);

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <View style={[styles.quadradinho, { backgroundColor: "#f6be5f" }]}> 
            <Image
              source={item.imagem ? { uri: item.imagem } : require("./assets/images/calleri.png")}
              style={styles.imagem}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textNome}>{item.nome}</Text>
            <Text style={styles.ingredientes}>{item.ingredientes}</Text>
            <Text style={styles.preco}>{precoFormatado}</Text>
          </View>
          <TouchableOpacity style={styles.addButton} onPress={() => adicionarAoCarrinho(item)}>
            <Image source={add} style={styles.addIcon} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }



  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/images/fundoBrancoSp.png")} style={styles.imageBg}>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <View style={styles.header}>
          <Image source={require("./assets/images/spfcHeader.png")} style={styles.headerImage} />
        </View>

        <FlatList
          data={item}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={require("./assets/images/home.png")} style={styles.footerIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("./assets/images/orders.png")} style={styles.footerIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("./assets/images/menuMenor.png")} style={styles.footerIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("./assets/images/profile.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("./assets/images/carrinho.png")} style={styles.footerIcon} />
          {totalCarrinho > 0 && (
          <View style={styles.carrinhoBadge}>
            <Text style={styles.carrinhoBadgeText}>{totalCarrinho}</Text>
          </View>
        )}
        </TouchableOpacity>
       
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
  },
  item: {
    backgroundColor: "black",
    padding: 32,
    marginVertical: 8,
    marginHorizontal: 13,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    backgroundColor: "black",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image: {
    width: 190,
    height: 173,
    marginRight: "auto",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
  },
  textNome: {
    fontWeight: "bold",
    color: "#f6be5f",
    fontStyle: "italic",
    marginStart: "auto",
    fontSize: 19,
  },
  footer: {
    borderTopWidth: 0.2,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  preco: {
    fontWeight: "bold",
    color: "yellow",
    marginLeft: "auto",
    fontSize: 16,
  },
  headerImage: {
    width: 400,
    height: 140,
    alignItems: "center",
    marginTop: "auto",
  },
  ingredientes: {
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    marginLeft: "auto",
    fontFamily: "Star Wars",
  },
  imageBg: {
    flex: 1,
    justifyContent: "center",
  },
  quadradinho: {
    width: 150,
    height: 150,
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 20,
  },
  imagem: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  addButton: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 8,
  },
  carrinhoBadge: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carrinhoBadgeText: {
    color: "white",
    fontWeight: "bold",
  },
  mensagemSucessoText: {
    color: '#155724',
    fontSize: 16,
    textAlign: 'center',
},
});

export default Cardapio;