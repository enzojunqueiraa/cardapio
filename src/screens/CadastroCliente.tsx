import React, { useState } from "react";
import { FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroCliente: React.FC = () => {

    const [cliente, setCliente] = useState<Cliente[]>([]);
    const [imagem, setImagem] = useState<any>('');
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
   

    const cadastrarCliente = async() => {
        try {
            const formData = new FormData();
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name:new Date()+ '.jpg'
            });
            formData.append('nome', nome);
            formData.append('telefone', telefone);
            formData.append('endereco', endereco);
            formData.append('email', email);
            formData.append('cpf', cpf);
            formData.append('password', password);
            const response = await axios.post('http://10.137.11.226:8000/api/clientes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }catch(error) {
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
            if(response.didCancel){
                console.log('cancelado pelo usuário');
            } else if(response.error){
                console.log('erro ao abrir a camera');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri)
                
            }
        });
    }
    
    const selecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchImageLibrary(options, (response)=>{
            if(response.didCancel){
                console.log('cancelado pelo usuário')
            } else if(response.error){
                console.log('erro ao abrir a galeria')
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri)
            }
        })
        



    }


    return (
         <ScrollView style={{ height: '100%', width: "auto" }}>
        <View style={styles.container}>
             
            
          <Image source={require('../assets/images/spfcHeader.png')}
            style={styles.headerImage}
            />
            <StatusBar backgroundColor="red" barStyle='light-content'/>  
        <View style={styles.header}>
            <Text style={styles.headerText}>Cadastro Cliente</Text>
            
        </View>
          
        <View style={styles.alinhamentoImagensSelecionada} > 
          {imagem ? <Image source={{ uri: imagem}} style={styles.imageSelecionada} /> : null}  
         </View>

          <View style={styles.form} >
            <TextInput 
            style={styles.input} 
            placeholder="Nome" 
            value={nome}
            onChangeText={setNome} />

            <TextInput 
            style={styles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone} />

            <TextInput 
            style={styles.input}
            placeholder="Endereço"
            value={endereco}
            onChangeText={setEndereco}
            multiline />

            <TextInput 
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            multiline />

            <TextInput 
            style={styles.input}
            placeholder="Cpf"
            value={cpf}
            onChangeText={setCpf}
            multiline />

            <TextInput 
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            multiline />

         <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
            <Text style={styles.imageButtonText} > Selecionar Imagens</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.imageButton} onPress={abrirCamera} >
            <Text style={styles.imageButtonText}  > Tirar Foto</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.imageButton} onPress={cadastrarCliente}>
            <Text style={styles.imageButtonText} > Cadastrar Cliente</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.footer}>
         
           <TouchableOpacity >
            <Image source={require('../assets/images/home.png')}
            style={styles.footerIcon} />
           </TouchableOpacity>

           <TouchableOpacity >
           <Image source={require('../assets/images/orders.png')}
           style={styles.footerIcon} />
           </TouchableOpacity>

           <TouchableOpacity >
           <Image source={require('../assets/images/menuMenor.png')}
           style={styles.footerIcon} />
           </TouchableOpacity>

           <TouchableOpacity >
            <Image source={require('../assets/images/profile.png')}
            style={styles.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity >
            <Image source={require('../assets/images/carrinho.png')}
            style={styles.footerIcon} />
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
        backgroundColor: 'red',
        paddingVertical: 15,
        alignItems: 'center',

    },
    headerImage: {
        width: 400,
        height: 143,
        alignItems: 'center',
          

    }, 
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        padding: 15,
        backgroundColor: '#f0f0f0',
        marginBottom: 19,
      
    },
    footer: {
        borderTopWidth: 0.9,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding:17
    

    },
    footerIcon: {
        width: 30,
        height: 30,
    
    
    },
    imageBg: {
        flex: 1,
justifyContent: 'center',

    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'

    },
    imageSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagensSelecionada: {
        alignItems: 'center',
        borderRadius: 5
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }






})



export default CadastroCliente;