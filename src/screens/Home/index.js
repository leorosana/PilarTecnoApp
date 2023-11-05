import React from 'react';
import {
    SafeAreaView,  
    Dimensions,  
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Alert, Button
} from 'react-native';
import { Icon } from '@rneui/themed';
import Header from '../../components/Header';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

const Home = (props)=> {

    const handlePressHome = () => {
        Alert.alert(
            'ATENCION:',
            'Ya se encuentra en el HOME!',
            [
            {
                text: 'Aceptar',
                onPress: () => console.log('Botón Aceptar presionado'),
            },
            ]
        );          
        
        return (
        <View style={styles.container}>
            <Button title="Ir a HOME" onPress={handlePressHome} />
        </View>
        );        
    };

    
    const handlePressProfile = () => {
        props.navigation.navigate("ProfileTab")
    }
    const handlePressList = () => {
        props.navigation.navigate("ListsTab")
    }
    const handlePressMap = () => {
        props.navigation.navigate("MapTab")
    }
  
  return (
    <SafeAreaView style ={styles.container}>
      
        <Header />
        <View style={{...styles.gridContainer}}>

            <View style={{...styles.gridRow, flexDirection:'row'}} >
                <View style={{...styles.gridColum, justifyContent:'flex-end', paddingBottom:'5%'}}>                    
                    <TouchableOpacity style={{...styles.gridButton, backgroundColor:'#ff637d'}} onPress={handlePressHome}>
                        <Text style={{...styles.buttonTitle}}> HOME </Text>
                    </TouchableOpacity>    
                </View> 
            
                <View style={{...styles.gridColum, justifyContent:'flex-end', paddingBottom:'5%'}}>   
                    <TouchableOpacity style={{...styles.gridButton, backgroundColor:'#f4f1bb'}} onPress={handlePressList}>
                        <Text style={{...styles.buttonTitle}}> LISTAS </Text>
                    </TouchableOpacity>  
                </View>
            </View>  

            <View style={{...styles.gridRow, flexDirection:'row'}} >
                <View style={{...styles.gridColum, justifyContent:'flex-start', paddingTop:'5%'}}>   
                    <TouchableOpacity style={{...styles.gridButton, backgroundColor:'#66d7d1'}} onPress={handlePressMap}>
                        <Text style={{...styles.buttonTitle}}> MAPA </Text>
                    </TouchableOpacity>           
                </View> 
            
                <View style={{...styles.gridColum, justifyContent:'flex-start', paddingTop:'5%'}}>   
                    <TouchableOpacity style={{...styles.gridButton, backgroundColor:'#eaf2e3'}} onPress={handlePressProfile}>
                        <Text style={{...styles.buttonTitle}}> PERFIL </Text>
                    </TouchableOpacity> 
                </View>
            </View> 

        </View>              
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    gridContainer:{
        flex:1,
        height:HEIGTH,
        width:WIDTH,
    },
    gridColum:{
        flex:1,
        alignItems:'center',
        
    },
    gridRow:{
        flex:1,
        
    },
    gridButton:{
        backgroundColor:'#606060',
        width:WIDTH*.4,
        height:HEIGTH*.3,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        elevation:5
    },
    buttonTitle:{
        fontSize:18,
        color:'#550000',
        fontWeight:500,
        elevation:3
    },
  container:{
    flex:1,
    height:'100%',
    width:'100%',
    backgroundColor:'#c4915e'
  }
  
});

export default Home;