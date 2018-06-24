import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Image} from 'react-native';
import { Button,Container, Header, Content, Form, Item, Input, Label, Fab} from 'native-base';
import Parallax from './Parallax';
import BorrowList from './BorrowList';
import HeaderDisplay from './HeaderDisplay';
export default class BorrowForm extends React.Component{
    static propTypes = {
        navigation: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            fabActive: false
        };

        this.handleFabClose = this.handleFabClose.bind(this);
        
    }
    render(){
        const {navigate} = this.props.navigation;

        return (
          

            <Parallax
            navigate={navigate}
            title='BorrowForm'
            titleLeft={0}
            titleTop={0}
            renderHeaderContent={props => <HeaderDisplay {...props} />}
            renderScroller={props => <BorrowList scrollProps={props} />}>
            
            </Parallax>
        );
    }

    handleFabClose() {
        this.setState({fabActive: !this.state.fabActive});
    }
    
}
const styles = {
    fabMask: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: appColors.mask
    },
    fabContainer: {
        marginLeft: 10
    },
    fab: {
        backgroundColor: appColors.primary
    },
    mood: {
        backgroundColor: appColors.primaryLightBorder
    },
    moodIcon: {
        color: appColors.primaryLightText
    }
};