import React, {useState,useEffect} from 'react';
import {styles} from '../Style'
import {View,Text, ImageBackground} from 'react-native'

export default function Home() {
       const [city, setCity]= useState (null)
       const [cities, setCities]= useState (null)

    return (
        city?
        <View style={styles.container}>

        <ImageBackground style= {styles.imgMorning} source= {require('../images/night.png')}>
            <View style={styles.headBox}>
                <Text style={styles.H1}>
                    {city.name}
                </Text>
                <Text style={styles.data}>
                    {city.weather[0].icon}
                </Text>
            </View>
            
            {/**TemperatureBox */}
            <View style={styles.Bar}>
                <Text style={styles.data}>
                    Temperature: {city.main.temp}
                </Text>
            </View>
            {/**Humidity */}
            <View style={styles.Bar}>
                <Text style={styles.data}>
                    Humidity: {city.main.humidity}
                </Text>
            </View>
            {/**Description */}
            <View style={styles.Bar}>
                <Text style={styles.data}>
                    Description: {city.weather[0].description}
                </Text>
            </View>
           
            
            </ImageBackground>
        

        </View>
        :null
    )        
}
  
    


