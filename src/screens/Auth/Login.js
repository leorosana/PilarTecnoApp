import React, {useState} from 'react';
import {
    SafeAreaView,  
    Dimensions,  
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Input, Button } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { appActions } from '../../redux/appRedux';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import { counterEvent } from 'react-native/Libraries/Performance/Systrace';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

const Login = ()=> {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [pw, setPW] = useState("")

    handleChangeEmail = (value) => {
        console.log(value)
        setEmail(value)
    }

    handleChangePW = () => {
        setPW(value)
    }

    handlePress = () => {
        dispatch(appActions.setToken(true))
    }

  return (
    <SafeAreaView style ={styles.container} > 
        <View style={styles.formContainer}>    
            <View >
                <Input 
                    containerStyle={styles.input}
                    value={email}
                    onChangeText={value=>handleChangeEmail(value)}
                    placeholder="Email"
                    keyboardType="email-address"
                />
            </View>

            <View >
                <Input 
                    containerStyle={styles.input}
                    value={pw}
                    onChangeText={value=>handleChangePW(value)}
                    placeholder="Contraseña"
                    secureTextEntry ={true}
                />
            </View>  

        </View>  
        <View style={styles.buttons}>
            <Button onPress={handlePress} >
                Ingresar                
            </Button>
            <Text > | </Text>
            <Button onPress={handlePress} >
                Registrarse                
            </Button>
        </View>          
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    formContainer:{
        width:WIDTH,
        justifyContent:'center',
        alignItems:'center'
    },
    buttons:{
        flexDirection:'row',
        marginTop:'15%',
        justifyContent:'center',
        alignItems:'center',
        width:WIDTH*.9
    },
    input:{
        height:40,
        margin:12,
        width:WIDTH*.9,
        padding:10,
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
    //backgroundColor:'#606060',
    justifyContent:'center'
  }
  
});

export default Login;