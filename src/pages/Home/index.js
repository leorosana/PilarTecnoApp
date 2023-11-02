import React from 'react';
import {
    SafeAreaView,  
    Dimensions,  
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { Icon } from '@rneui/themed';
import Header from '../../components/Header';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

const Home = ()=> {

    const handlePressHome = () => {
        console.log("Desde el HOME!")
    }
  
  return (
    <SafeAreaView style ={styles.container}>
      
        <Header />
        <View style={{...styles.gridContainer}}>

            <View style={{...styles.gridRow, flexDirection:'row'}} >
                <View style={{...styles.gridColum, justifyContent:'flex-end', paddingBottom:'5%'}}>                    
                    <TouchableOpacity style={{...styles.gridButton, backgroundColor:'red'}} onPress={handlePressHome}>
                        <Text style={{...styles.buttonTitle}}> HOME </Text>
                    </TouchableOpacity>    
                </View> 
            
                <View style={{...styles.gridColum, justifyContent:'flex-end', paddingBottom:'5%'}}>   
                    <TouchableOpacity style={{...styles.gridButton, backgroundColor:'pink'}}>
                        <Text style={{...styles.buttonTitle}}> POKEMONS </Text>
                    </TouchableOpacity>  
                </View>
            </View>  

            <View style={{...styles.gridRow, flexDirection:'row'}} >
                <View style={{...styles.gridColum, justifyContent:'flex-start', paddingTop:'5%'}}>   
                    <TouchableOpacity style={{...styles.gridButton, backgroundColor:'blue'}}>
                        <Text style={{...styles.buttonTitle}}> MAPA </Text>
                    </TouchableOpacity>           
                </View> 
            
                <View style={{...styles.gridColum, justifyContent:'flex-start', paddingTop:'5%'}}>   
                    <TouchableOpacity style={{...styles.gridButton, backgroundColor:'green'}}>
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
        height:HEIGTH*.4,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        elevation:5
    },
    buttonTitle:{
        fontSize:18,
        color:'white',
        fontWeight:500,
        elevation:3
    },
  container:{
    flex:1,
    height:'100%',
    width:'100%',
    backgroundColor:'#606060'
  }
  
});

export default Home;