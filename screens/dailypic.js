import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, Linking, TouchableOpacity, Dimensions, Image } from 'react-native';
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";

export default class Dailypic extends React.Component {

  constructor() {
    super();
    this.state = {
      apod: ""
    }
  }

  componentDidMount() {
    this.getAPOD()
  }

  getAPOD = () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=H2Ozn9Gr67rRuDt30ZEYjrVfq675v1sB4lkPrFfZ")
      .then(response => {
        this.setState({ apod: response.data })
      })
      .catch(error => {
        alert(error.message)
      })
  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <SafeAreaView />
          <Text style={styles.titleText}>Astronomy Picture of the Day</Text>
          <TouchableOpacity onPress={() => Linking.openURL(this.state.apod.url)} target="blank">
            <View>
              <Image source={require("../assets/play-video.png")} style = {styles.vidButton}></Image>
            </View>
          </TouchableOpacity>
          <Text style = {styles.infoTitle}>{this.state.apod.title}</Text>
          <Text style = {styles.infoText}>{this.state.apod.explanation}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  titleText: {
    textAlign: "center",
    fontSize: RFValue(24),
    fontWeight: "bold",
    color: "white"
  },
  vidButton: {
    alignSelf: "center",
    width: RFValue(100),
    height: RFValue(100),
    marginTop: RFValue(15)
  },
  infoText: {
    color: "white",
    textAlign: "justify",
    margin: 20
  },
  infoTitle: {
    textAlign: "center",
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "pink",
    marginTop: RFValue(15)
  }
});
