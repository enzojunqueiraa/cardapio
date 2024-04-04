import React, { useState } from "react";
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroCliente: React.FC = () => {

    const [cliente, setCliente] = useState<Cliente[]>([]);
    const [imagem, setImagem] = useState<any>('');
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
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
        <View style={styles.container}>
           
            <StatusBar backgroundColor="red" barStyle='light-content'  />  
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
            <Text style={styles.imageButtonText} > Cadastrar Produto</Text>
         </TouchableOpacity>
         </View>
         </View>

    );
    

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
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
        alignItems: 'center'
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