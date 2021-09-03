import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style = {styles.bgImage}
                source = {require("../assets/stars.gif")}>
                    <Image style = {styles.mainImage} source={require("../assets/main-icon.png")}/>
                    <Text style = {styles.titleText}>Stellar App</Text>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('SpaceCrafts')}}
                    style = {styles.buttonContainer}>
                        <Text style = {styles.buttonText}>Spacecrafts</Text>
                        <Image style = {styles.buttonImage} source={require("../assets/space_crafts.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('StarMap')}}
                    style = {styles.buttonContainer}>
                        <Image style = {styles.buttonImage2} source={require("../assets/star_map.png")}/>
                        <Text style = {styles.buttonText}>Star Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('DailyPic')}}
                    style = {styles.buttonContainer}>
                        <Image style = {styles.buttonImage3} source={require("../assets/daily_pictures.png")}/>
                        <Text style = {styles.buttonText}>Daily Pictures</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    bgImage: {
        flex: 1,
    },
    titleText: {
        color: "white",
        width: "75%",
        height: 50,
        alignSelf: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 36,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 15,
        color: "purple",
        textAlign: "center"
    },
    buttonContainer: {
        alignContent: "center",
        backgroundColor: "white",
        marginTop: 50,
        flex: 0.15,
        width: "75%",
        alignSelf: "center",
        borderRadius: 50,
    },
    buttonImage: {
        width: 55,
        height: 85,
        position: "absolute",
        marginTop: -10,
        right: 15
    },
    buttonImage2: {
        width: 70,
        height: 65,
        position: "absolute",
        marginTop: -5,
        right: 10
    },
    buttonImage3: {
        width: 71.5,
        height: 49.5,
        position: "absolute",
        marginTop: -5,
        right: 5
    },
    mainImage: {
        width:150,
        height: 150,
        alignSelf: "center",
        marginTop: 25

    }
});
