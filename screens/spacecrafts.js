import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Platform, Dimensions, StatusBar, ImageBackground, Image, ImageBackgroundBase } from 'react-native';
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";
 
export default class MeteorScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      aircrafts: {}
    }
  }
  componentDidMount() {
    this.getData()
  }
  getData = () => {
    axios
      .get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
      .then(response => {
        this.setState({
          aircrafts: response.data.results
        })
      }).catch(error => { alert("Database Down") })
  }
  
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item }) => {
    return (
      <View>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../assets/space.gif")}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style = {styles.infoContainer}>
          <Image
            source={{ uri: item.agency.image_url }}
            style={{ borderRadius: 25, width: Dimensions.get('window').width-RFValue(45), height: Dimensions.get('window').width-RFValue(100), alignSelf: "center" }}>
          </Image>
          <View>
            <Text style={styles.titleText}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.agency.name}</Text>
            <Text style={styles.descriptionText}>Description: {item.agency.description}</Text>
          </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
 
  render() {
    let aircrafts_arr = Object.keys(this.state.aircrafts)
    let aircrafts = [].concat.apply([], aircrafts_arr)
    aircrafts.sort(function (a, b) {
    })
    aircrafts = aircrafts.slice(0, 5)
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.aircrafts}
          renderItem={this.renderItem}
          horizontal={true}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: RFValue(30),
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: RFValue(5),
    marginTop: RFValue(5)
  },
  subtitle: {
    fontSize: RFValue(24),
    color: "white",
    textAlign: "center",
    marginBottom: RFValue(7)
  },
  descriptionText: {
    width: Dimensions.get('window').width - RFValue(45),
    color: "white",
    textAlign: "justify",
    alignSelf: "center"
  },
  infoContainer: {
    padding: RFValue(15),
    backgroundColor: "black",
    borderRadius: 25,
    margin: RFValue(10)
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})