import React from 'react';
import {
    SafeAreaView,  
    Dimensions,  
    StyleSheet,
    View,
    Text, 
    TouchableOpacity
} from 'react-native';
import Header from '../../components/Header';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

const Listas = (props)=> {

    const handlePress = ()=> {
        props.navigation.navigate ('ListDetail')
    }

  return (
    <SafeAreaView style ={styles.container}>      
        <Header />
        <View style={{...styles.gridRow, flexDirection:'row'}}>
            <Text style={{fontSize:50}}> Listas </Text>  
            <TouchableOpacity style={{...styles.gridButton, backgroundColor:'#f4f1bb'}} onPress={handlePress}>
                        <Text style={{...styles.buttonTitle}}> Ir al detalle </Text>
                    </TouchableOpacity>           
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
        justifyContent:'center',
        alignItems:'center'
        
    },
    gridButton:{
        width:WIDTH*.4,
        height:WIDTH*.4,
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
    backgroundColor:'#c4915e',
    justifyContent:'center'
  }
  
});

export default Listas;