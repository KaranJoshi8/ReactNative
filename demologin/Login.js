import React from 'react';
import { TextInput, Image, View, TouchableOpacity, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import photo from './img/logo.jpg';


export default class Login extends ValidationComponent {

    state = {
        email: "",
        password: "",
        hidePassword: true
    }

    // change the state from true t ofalse
    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    //To validate the username and password when user login...
    handlevalid = () => {

        if (this.validate({ email: { email: true } })) {

            if (this.validate({ password: { minlength: 3 } })) {

                Alert.alert("Logined !")

            } else { alert("invalid password") }

        } else { alert("invalid email") }

    }

    // user forgort password
    forgot = () => {
        alert("forgot password");
    }

    // user signup event
    signup = () => {
        alert("Sign up");
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <Image source={photo} style={{ height: 150, width: 150 }} />
                    <Text style={styles.welcome}>Welcome Back,</Text>
                    <Text style={styles.instructions}>Sign in to continue</Text>

                    <Text style={{ color: "#000" }}>Email</Text>
                    <TextInput
                        style={{ borderBottomWidth: 1, marginBottom: 15 }}
                        placeholder="bharat.jograna@jbspl.com"
                        secureTextEntry={false}
                        onChangeText={emailconst => this.setState({ email: emailconst })}
                    />

                    <Text style={{ color: "#000" }}>Password</Text>
                    <View>
                        <TextInput
                            style={{ borderBottomWidth: 1, marginBottom: 15 }}
                            placeholder="enter password"
                            secureTextEntry={this.state.hidePassword}
                            onChangeText={passwordconst => this.setState({ password: passwordconst })}
                        />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.visibilityBtn}
                            onPress={this.managePasswordVisibility}
                        >
                            <Image
                                source={(this.state.hidePassword) ? require('./assets/hide.png') : require('./assets/view.png')}
                                style={styles.btnImage}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={this.forgot}
                    >
                        <Text style={{ textAlign: 'right', fontSize: 17, paddingBottom: 10, marginBottom: 20, marginTop: 10 }}>
                            Forgot Password?
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            height: 70,
                            backgroundColor: "#8A2BE2",
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 50
                        }}
                        onPress={this.handlevalid}
                    >
                        <Text style={{ color: "#fff", fontSize: 17 }}>
                            Login
                    </Text>
                    </TouchableOpacity>


                    <View style={styles.input}>

                        <Text>Not user?</Text>
                        <TouchableOpacity
                            onPress={this.signup}
                        >
                            <Text style={{ color: "#8A2BE2", fontWeight: 'bold', fontSize: 17 }}>
                                Singup
                    </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create(
    {
        container:
        {
            flexDirection: 'column',
            margin: 10,
            padding: 10,
        },
        visibilityBtn:
        {
            position: 'absolute',
            right: 3,
            height: 40,
            width: 35,
            padding: 5
        },

        btnImage:
        {
            resizeMode: 'contain',
            height: '100%',
            width: '100%'
        },
        welcome: {
            fontSize: 25,
            color: "#000",
            marginTop: 20,
        },
        instructions: {
            marginBottom: 60,
        },
        input: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        button: {
            height: 80,
        },
    });