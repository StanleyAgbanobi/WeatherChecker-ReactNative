import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import WeatherSearch from './WeatherSearch';

const WeatherInfo = ({weatherData, fetchWeatherData}) => {
    const {
        name,
        visibility,
        weather: [{icon, description}],
        main: {
                temp,
                feels_like,
                humidity,
            },
        wind: {speed},
        sys: {sunrise, sunset},
    } = weatherData;

  return (
    <SafeAreaView style={styles.container}>
        {/* search  */}
        <WeatherSearch fetchWeatherData={fetchWeatherData}/>

        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>{name}</Text>
        </View>

        <View style={styles.logo}>
            <Image 
            style={styles.largeIcon}
            source={{uri: `http://openweathermap.org/img/wn/${icon}.png`}}
             />
             <Text style={styles.currentTemp}>{temp} °C</Text>
        </View>

        <Text style={styles.description}>{description}</Text>

        {/* section 1  */}
        <View style={styles.extraInfo}>
            <View style={styles.info}>
                <Image 
                    style={styles.smallIcon}
                    
                />
                <Text style={styles.infoText}>{feels_like} °C</Text>
                <Text style={styles.infoText}>Feels Like</Text>
            </View>
            <View style={styles.info}>
                <Image 
                    style={styles.smallIcon}
                    
                />
                <Text style={styles.infoText}>{humidity} %</Text>
                <Text style={styles.infoText}>Humidity</Text>
            </View>
        </View>

        {/* section 2  */}
        <View style={styles.extraInfo}>
            <View style={styles.info}>
                <Image 
                    style={styles.smallIcon}
                    
                />
                <Text style={styles.infoText}>{visibility}</Text>
                <Text style={styles.infoText}>Visibility</Text>
            </View>
            <View style={styles.info}>
                <Image 
                    style={styles.smallIcon}
                    
                />
                <Text style={styles.infoText}>{speed} m/s</Text>
                <Text style={styles.infoText}>Wind Speed</Text>
            </View>
        </View>

        {/* section 3 */}
        <View style={styles.extraInfo}>
            <View style={styles.info}>
                <Image 
                    style={styles.smallIcon}
                    
                />
                <Text style={styles.infoText}>{new Date(sunrise*1000).toLocaleString()}</Text>
                <Text style={styles.infoText}>Sunrise</Text>
            </View>
            <View style={styles.info}>
                <Image 
                    style={styles.smallIcon}
                    
                />
                <Text style={styles.infoText}>{new Date(sunset*1000).toLocaleString()}</Text>
                <Text style={styles.infoText}>Sunset</Text>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default WeatherInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 10,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    largeIcon: {
        width: 90,
        height: 90,
    },
    currentTemp: {
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
    },
    description: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
    extraInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7,
    },
    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: '#D0EAFA',
        padding: 8,
        borderRadius: 15,
        justifyContent: 'center'
    },
    smallIcon: {
        height: 40,
        width: 40,
        borderRadius: 40/2,
        marginLeft: 50
    },
    infoText: {
        textAlign: 'center',
        fontSize: 18,
    }
});