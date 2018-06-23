import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Image} from 'react-native';
import { Button,Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import NavigationContainer from './NavigationContainer';
export default class HistoryForm extends React.Component{
    static propTypes = {
        navigation: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <NavigationContainer navigate={navigate} title='HistoryForm'>
            <View>
                <Text>HistoryForm</Text>
            </View>
            </NavigationContainer>
        );
    }

    
}