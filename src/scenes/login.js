import React, {Component} from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'

import { login } from './../reducer';

class Login extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            user: 'test',
            pass: 'test'
        }
    }

    async onPress(){
        const { user, pass } = this.state
        await this.props.login(user,pass)
        console.log('login user : ',this.props.authUser)
        await AsyncStorage.setItem('cpm123_user',JSON.stringify(this.props.authUser))
        this.props.navigation.navigate('Assets')

    }

    render() {
      return (
            <View>
                <Text>Prénom</Text>
                <TextInput
                    ref={'input1'}
                    autoCapitalize={'none'}
                    autoCompleteType={'username'}
                    returnKeyType={'next'}
                    onChangeText={ (text) => this.setState({user: text}) }
                    value={this.state.user}
                />
            
                <Text>Nom </Text>
                <TextInput
                    ref={'input2'}
                    autoCapitalize={'none'}
                    returnKeyType={'go'}
                    onChangeText={ (text) => this.setState({pass: text}) }
                    value={this.state.pass}
                />
                <Button
                  title="log me"
                  onPress={() => this.onPress()}
                />
            </View>
      )
    }
}


const mapStateToProps = (state) => {
    return {authUser: state.authUser}
}
const mapDispatchToProps = {
    login
} 
export default connect(mapStateToProps, mapDispatchToProps)(Login) 


  