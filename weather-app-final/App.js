////Weather API App101

import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchbleOpacity,
  FlatList,
  ImageBackground,
  Button,
} from 'react-native';

var cityColor = '#fff';
var color = '#fff';

const App = () => {
  const [forecast, setForecast] = useState('');
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState('');
  const [main, setMain] = useState('');
  const [sys, setSys] = useState('');
  const [city, setCity] = useState('Johannesburg');

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9d61fecd65a28154c9af45f88a62dbc7`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecast(data);
        setWeather(data.weather);
        setMain(data.main);
        setSys(data.sys);

        console.log(data);
      });
  }, [city]);

  let imgCity = require('./images/clear_sky_kimberley.jpg');

  if (city === 'Kimberley') {
    imgCity = require('./images/clear_sky.jpeg');
  } else if (city === 'Durban') {
    imgCity = require('./images/image1.jpeg');
  } else if (city === 'Cape Town') {
    imgCity = require('./images/haze_tokyo.jpg');
  } else if (city === 'Johannesburg') {
    imgCity = require('./images/cloud_morning.jpg');
  } else if (city === 'East London') {
    imgCity = require('./images/rain.jpg');
  } else if (city === 'Mafikeng') {
    imgCity = require('./images/photo-1523774294084-94691d7bb289.jfif');
  } else if (city === 'Bloemfontein') {
    imgCity = require('./images/morning_final.jpeg');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <ImageBackground style={styles.tinyLogo} source={imgCity}>
          <TextInput
            name="city"
            style={{
              fontSize: 18,
              backgroundColor: 'white',
              marginTop: 200,
              textAlign: 'center',
              borderRadius: 100,
              width: 300,
              height: 30,
              padding: 10,
            }}
            onSubmitEditing={(text) => {
              setCity(text.target.value);
            }}
            placeholder="Type City..."
          />

          <Text
            style={{
              fontSize: 28,
              color: 'white',
              paddingTop: 10,
            }}>
            {forecast.name}
          </Text>

          <Text
            style={{
              fontSize: 18,
              color: 'white',
              paddingLeft: 37,
            }}>
            {'Max :   ' + main.temp_max + ' °C'}
          </Text>

          <Text
            style={{
              fontSize: 18,
              paddingLeft: 40,
              color: 'white',
            }}>
            {'Min :   ' + main.temp_min + ' °C'}
          </Text>

          <Text
            style={{
              fontSize: 18,
              color: 'white',
            }}>
            {'Humidity :   ' + main.humidity}
          </Text>
        </ImageBackground>

        <View></View>

        <View style={styles.morning}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'center',
  },

  form: {
    alignContent: 'center',
    width: 50,
    height: 50,
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: 65,
    paddingRight: 25,
  },

  morning: {
    marginTop: 200,
    marginLeft: 150,
    paddingTop: 200,
  },

  tinyLogo: {
    width: 330,
    height: 900,
    marginBottom: 200,
  },
});

export default App;
