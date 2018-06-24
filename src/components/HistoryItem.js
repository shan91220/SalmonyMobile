import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Platform,Image} from 'react-native';
import { Container, Header, Content, Button ,ListItem} from 'native-base';


export class HistoryItem extends React.Component {
    static propTypes = {
        record_id : PropTypes.number,
        name : PropTypes.string,
        amount : PropTypes.number,
        expect_date : PropTypes.string,
        repay_date : PropTypes.string
    };
    constructor(props) {
        super(props);
    }

    render() {
        const {record_id,name,amount,expect_date,repay_date} = this.props;
        return (
            <ListItem key={record_id} title={name} style={StyleSheet.flatten(styles.listItem)}>
                <View style={styles.record}>
                    <View style={styles.person}>
                        <Image source={require('../images/LPICON.png')} style={styles.img}/>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={styles.contain}>
                        <View style={styles.info}>
                            <Text style={styles.amount}>${amount}</Text>
                            <Text style={styles.expect_date}>{expect_date}</Text>
                            <Text style={styles.repay_date}>{repay_date}</Text>
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
        marginLeft: 20
    },
    record: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    person: {
        flexDirection: 'column',
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
        left: 5,
    },
    name: {
        fontSize: 20,
        alignItems: 'center',
    },
    amount: {
        fontSize: 20,
        left: 20,
        alignItems: 'center',
    },
    expect_date: {
        fontSize: 20,
        left: 40,
        alignItems: 'center',
    },
    repay_date: {
        fontSize: 20,
        left: 70,
        alignItems: 'center',
    }

});