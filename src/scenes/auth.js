import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'

import { setUser } from './../redux/reducers/Users';

class Auth extends Component { 

    async componentDidMount(){

        let json = await AsyncStorage.getItem('cpm123_user')
        user = JSON.parse(json)
        if(user != null){
            this.props.setUser(user)
            this.props.navigation.navigate("Assets")
        }else{
            this.props.navigation.navigate('Login')
        }
    }

    render() {
      return (<View><Text>AutoLogin !</Text></View>)
    }
}


const mapStateToProps = (state) => {
    return {authUser: state.authUser}
}
const mapDispatchToProps = {
    setUser
} 
export default connect(mapStateToProps, mapDispatchToProps)(Auth) 