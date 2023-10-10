//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../shared/Colors';
import { Ionicons } from '@expo/vector-icons';

// create a component
const Login = () => {
    return (
        <View>
            <Image style={{height: 150, width: 'full', resizeMode: 'cover'}} source={require('../images/login.jpg')} />
            <View style={{
                // padding: 40,
                marginTop: -25,
                backgroundColor: "#FFF",
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
            }}>
                <Text 
                style={{
                    fontSize: 35,
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}>Welcome to CodeBox</Text>
                <Text style={{
                    textAlign: 'center',
                    marginTop: 80,
                    fontSize: 20,
                }}>Login / Signin</Text>
                <TouchableOpacity style={{
                    backgroundColor: Colors.primary,
                    padding: 10,
                    margin: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }}>
                    <Ionicons name='logo-google' size={24} color={'white'} style={{marginRight: 10}}  />
                    <Text style={{color: Colors.white}}>Sign In With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{textAlign: 'center'}}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default Login;
