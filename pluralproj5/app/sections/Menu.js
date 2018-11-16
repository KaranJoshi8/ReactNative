import React from 'react';
import { StyleSheet,TouchableOpacity,View,Text,Alert} from 'react-native'

export class Menu extends React.Component {

    onPress =() => {
        Alert.alert('You Tapped the button')
    }

    render(){
        return(
          <View style={styles.container}>
            <View style={styles.Buttonrow}>
                <TouchableOpacity style={styles.buttonstyle} onPress={this.onPress}>
                    <Text style={styles.buttontext}> Lessons </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonstyle} onPress={this.onPress}>
                    <Text style={styles.buttontext}> Register </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Buttonrow}>
                <TouchableOpacity style={styles.buttonstyle} onPress={()=>this.props.navigate('ContactRT')}>
                    <Text style={styles.buttontext}> Blog </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonstyle} onPress={this.onPress}>
                    <Text style={styles.buttontext}> Contact </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Buttonrow}>
                <TouchableOpacity style={styles.buttonstyle} onPress={this.onPress}>
                    <Text style={styles.buttontext}> Quiz </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonstyle} onPress={this.onPress}>
                    <Text style={styles.buttontext}> About </Text>
                </TouchableOpacity>
            </View>

          </View>  
        );
    }
}

const styles =StyleSheet.create({
    container:{
        flex:6,
        backgroundColor:'#35605a'
    },
    Buttonrow:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ffffff',
        borderBottomWidth:1

    },
    buttonstyle:{
        backgroundColor:'#35605a',
        height:'50%',
        width:'50%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttontext:{
        color:'#ffffff',
        fontSize: 18,
    }

});