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
import { Icon } from '@rneui/themed'

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

const Detalle = (props)=> {

  return (
    <SafeAreaView style ={styles.container}>      
        <Header leftComponent={(
        <View style={styles.headerRight}>
         
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={()=>props.navigation.goBack()}>
         <Icon name="arrow-back" color="white" />
        </TouchableOpacity>
      </View>
    )} />
        <View style={{...styles.gridRow, flexDirection:'row'}}>
            <Text style={{fontSize:50}}> Detalle </Text>            
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
        color:'white',
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

export default Detalle;