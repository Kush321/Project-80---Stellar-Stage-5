import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  Alert,
  Platform
} from 'react-native';
import {WebView} from 'react-native-webview';
//import axios from "axios";
import { TextInput } from 'react-native-gesture-handler';

export default class Starmap extends React.Component {
  constructor() {
    super();
    this.state = {
      longitude: {},
      latitude: {},
    };
  }


  render() {
    //const {longitude, latitude} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph} >Star Map</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Latitude"
          placeholderTextColor="white"
          onChangeText={(text) => {
            this.setState({
              latitude: text
            })
          }} />
        <TextInput
          style={styles.inputBox}
          placeholder="Longitude"
          placeholderTextColor="white"
          onChangeText={(text) => {
            this.setState({
              longitude: text
            })
          }} />
          <WebView
            scalesPageToFit={true}
            source={{uri:'https://virtualsky.lco.global/embed/index.html?longitude='+this.state.longitude+'&latitude='+this.state.latitude+'&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}}
            style={{marginTop: 20, marginBottom: 20}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  inputBox: {
    width: "75%",
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 2,
    height: 35,
    borderRadius: 25,
    paddingLeft: 15,
    marginTop: 15,
    borderColor: 'white',
    color: "white"
  }
});
