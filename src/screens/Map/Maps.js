import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView,  
    Dimensions,  
    StyleSheet,
    View,
    Text
} from 'react-native';
import Header from '../../components/Header';
import Geolocation from 'react-native-geolocation-service';
import { hasLocationPermission } from '../../services/LocationPermission';
import MapView, { Marker } from 'react-native-maps';
import { Image, Icon } from '@rneui/themed';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

const ASPECT_RATIO = WIDTH / HEIGTH;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Maps = ()=> {
    const useRef = useRef()

    const [region, setRegion] = useState({
        longitude:LONGITUDE,
        latitude:LATITUDE,
        latitude_delta:LATITUDE_DELTA,
        longitude_delta:LONGITUDE_DELTA,

    })

    useEffect(()=>{
        hasLocationPermission()    
     }, [])

    _getLocation = async () => {
        await Geolocation.getCurrentPosition(
            async posicion => {
                const longitude = posicion.coords.longitude;
                const latitude = posicion.coords.latitude;
                
                mapRef.current.animateToRegion(
                    {
                    latitude,
                    longitude,
                    latitudeDelta: region.latitudeDelta,
                    longitudeDelta: region.longitudeDelta
                    },
                    1000
                    );

                setRegion({ longitude, latitude, ...region })
                console.log('posicion actual... Latitud: ' + `${JSON.stringify(longitude)}` + ' latitud: '+`${JSON.stringify(latitude)}`)
        },
            (error) => {
                console.log(error.code, error.message);
            },
            {
                accuracy: {
                    android: 'high',
                    ios: 'best',
                },
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                distanceFilter: 0,
                forceRequestLocation: true,
            }
        )
    }

    const onRegionChange = r => {
        setRegion({r, ...region})
    }

    fitCoordinates = async () => {
        console.log('centrando mapa')
        _getLocation()
        }

  return (
      <View style={{ flex: 1 }}>
        {  region && ( 
            <>
                <MapView
                ref={mapRef}
                mapType='standard'
                style={styles.map}
                initialRegion={region}
                // region={this.state.region}
                onRegionChangeComplete={onRegionChange} />
            <View style={{
                position: 'absolute', flexDirection: 'row',
                backgroundColor: 'white', borderRadius: 100, width: WIDTH / 10, alignSelf: 'flex-end',
                margin: 20, marginRight: 30, alignItems: 'center', justifyContent: 'center'
            }}>
                <Icon
                    name="crosshairs"
                    type="font-awesome"
                    color='#8d2d84'
                    size={WIDTH / 10}
                    onPress={() => fitCoordinates()}
                />
            </View>
            <View style={styles.markerFixed}>
                <Image style={styles.marker} source={require('../../assets/images/pin.png')}
                />
            </View>
            <SafeAreaView style={styles.footer}>
                <Text style={styles.region}>longitud:
                    {JSON.stringify(region.longitude)}{"\n"}latitud:
                    {JSON.stringify(region.latitude)}</Text>
            </SafeAreaView>
          </>
            )  }
          
      </View>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        margin: WIDTH / 20,
        height: WIDTH / 2.5,
        width: WIDTH / 2.5,
        borderRadius: 15,
        justifyContent: 'center',
    },
    markerFixed: {
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '50%'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        width: WIDTH,
        height: HEIGTH,
        alignSelf: 'center'
    },
    marker: {
        height: 48,
        width: 48
    },
    footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        bottom: 30,
        position: 'absolute',
        width: '100%'
    },
    region: {
        color: '#fff',
        lineHeight: 20,
        margin: 20,
        alignSelf: 'center'
    }
})

export default Maps;