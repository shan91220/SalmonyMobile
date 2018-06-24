import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Platform,Image} from 'react-native';
import { Container, Header, Content, Button ,ListItem} from 'native-base';

import {connect} from 'react-redux';
import appColors from '../styles/colors';

export class ArrearItem extends React.Component {
    static propTypes = {
        record_id : PropTypes.number,
        name : PropTypes.string,
        amount : PropTypes.number,
        expect_date : PropTypes.string
    };
    constructor(props) {
        super(props);
    }

    render() {
        const {record_id,name,amount,expect_date} = this.props;
        return (
            <ListItem key={record_id} title={name} style={StyleSheet.flatten(styles.listItem)}>
                <View style={styles.record}>
                    <View>
                        <Image source={require('../images/LPICON.png')} style={styles.img}/>
                    </View>
                    <View style={styles.contain}>
                        <View style={styles.info}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.amount}>${amount}</Text>
                            <Text style={styles.expect_date}>{expect_date}</Text>
                        </View>
                        <View style={styles.btn}>
                            <Button warning >
                                <Text style={styles.btnfont}>已還款 提醒他!</Text>
                            </Button>
                        </View>
                    </View>
                </View>

               
            </ListItem>
            
        );
    }

}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'column',
        alignItems: 'stretch',
        marginLeft: 40
    },
    record: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    img: {
        height: 50,
        width: 50,
        alignItems: 'center',
    },
    contain: {
        flexDirection: 'column',
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        left: 10,
    },
    btn: {
        flexDirection: 'row',
        left: 60,
        top: 10,
    },
    btnfont: {
        fontSize: 15,
    },
    name: {
        fontSize: 20,
        alignItems: 'center',
    },
    amount: {
        fontSize: 20,
        left: 30,
        alignItems: 'center',
    },
    expect_date: {
        fontSize: 20,
        left: 60,
        alignItems: 'center',
    }

});