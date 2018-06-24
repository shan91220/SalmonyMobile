import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Image} from 'react-native';
import { Button,Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import NavigationContainer from './NavigationContainer';
import ArrearList from './ArrearList';
export default class ArrearForm extends React.Component{
    static propTypes = {
        navigation: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View>
                <NavigationContainer
                navigate={navigate} 
                title='ArrearForm'
                >
                </NavigationContainer>
                <ArrearList/>
            </View>
        );
    }
    
}