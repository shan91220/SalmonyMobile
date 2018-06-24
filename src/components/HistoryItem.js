import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Platform,Image} from 'react-native';

import {connect} from 'react-redux';
import {ListItem, Icon} from 'native-base';
import appColors from '../styles/colors';

export class HistoryItem extends React.Component {
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
                {/* <View style={styles.record}>
                    <View style={styles.img}>
                        <Image source={require('../images/LPICON.png')}/>
                    </View> 
                    <View style={styles.info}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.amount}>{amount}</Text>
                        <Text style={styles.expect_date}>{expect_date}</Text>
                    </View>
                </View> */}
                <Text>{name}</Text>
               
            </ListItem>
            
        );
    }

}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'column',
        alignItems: 'stretch',
        marginLeft: 0
    },
    record: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    img: {
        height: 40,
        width: 40,
        alignItems: 'center',
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        left: 100,
    },
    name: {
        fontSize: 20,
    },
    amount: {
        fontSize: 20,
        left: 20,
    },
    expect_date: {
        fontSize: 20,
        left: 20,
    }

});