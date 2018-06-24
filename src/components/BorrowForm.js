import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Image} from 'react-native';
import { Button,Container, Header, Content, Form, Item, Input, Label, Fab} from 'native-base';
import NavigationContainer from './NavigationContainer';
import BorrowList from './BorrowList';
export default class BorrowForm extends React.Component{
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
            title='BorrowForm'
            >
            </NavigationContainer>
            <BorrowList/>
            </View>
        );
    }

    
}