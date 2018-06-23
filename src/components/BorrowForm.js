import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Image} from 'react-native';
import { Button,Container, Header, Content, Form, Item, Input, Label, Fab} from 'native-base';
import NavigationContainer from './NavigationContainer';
export default class BorrowForm extends React.Component{
    static propTypes = {
        navigation: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        
    }
    render(){
        const {navigate} = this.props.navigation;
        const borrowRecord = {
            record_id: '1',
            borrower: 'ming',
            amount: 500,
            expect_date: 2018-6-24
        }
        return (
            <NavigationContainer 
            navigate={navigate} 
            title='BorrowForm'
            renderScroller = {props => <BorrowList scrollProps={props}/>}>
            
           
            </NavigationContainer>
            
        );
    }

    
}