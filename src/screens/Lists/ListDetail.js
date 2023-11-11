import React, { useEffect, useState } from 'react';
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
import { getPokemon } from '../../api';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

const Detalle = (props)=> {

  const { url } = props.route.params.item
  const [abilities, setAbilities] = useState(null)

  useEffect(()=>{
    getPokemonDetail()
  }, [props])

  getPokemonDetail = () => {
    getPokemon(url).then((data) => {
      console.log(data)
      setAbilities(data.abilities)
    })
    .catch((error) => {
      console.error('Error fetching Pokemon details:', error);
      setAbilities([]); // Establecer habilidades como una matriz vacía en caso de error
    });
}; 
  
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
        {/* <View style={{...styles.gridRow, flexDirection:'row'}}> 
            <Text style={{fontSize:20}}> {JSON.stringify(abilities)} </Text>            
        </View>  */}     

        <View style={{ ...styles.gridRow, flexDirection: 'row' }}>
        <Text style={{ fontSize: 18 }}>Habilidades:   </Text>
        <View>
          {abilities && abilities.map((ability, index) => (
            <Text key={ index }style={styles.abilityText}>
              {ability.ability.name}</Text>
          ))}
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
  },
  abilityText: {
    fontSize: 18,
    color: '#333', // color opcional
    marginBottom: 5, // espacio opcional entre habilidades
  },
  
});

export default Detalle;