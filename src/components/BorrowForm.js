import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Button, Icon, Drawer} from 'native-base';
import DrawerSideBar from './DrawerSideBar';
import BorrowList from './BorrowList';
export default class BorrowForm extends React.Component{
    static propTypes = {
        navigation: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            fabActive: false
        };

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }
    render(){
        const {navigate} = this.props.navigation;

        return (
          
            <Drawer
            ref={(el) => this.drawer = el}
            content={<DrawerSideBar navigate={navigate} />}
            onClose={this.closeDrawer}
            tweenHandler={(ratio) => ({
                mainOverlay: {
                    opacity: ratio,
                    backgroundColor: appColors.mask
                }
            })}>
            <View style={styles.header}>
            </View>
            <View style={styles.list}>
                <BorrowList />
            </View>
            <View style={styles.bar}>
                <Button transparent style={StyleSheet.flatten(styles.button)} onPress={this.openDrawer}>
                     <Icon name='menu'
                        style={StyleSheet.flatten(styles.icon)} />
                </Button>
                </View>
                <View style={styles.title}>
                <Text style={styles.titleText}>借款紀錄</Text>
            </View>
            </Drawer>
        );
    }

    openDrawer() {
        this.drawer._root.open();
    }

    closeDrawer() {
        this.drawer._root.close();
    }
    
}
const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'rgb(18, 108, 168)',
    },
    list: {
        top: 35,
    },
    bar: {
        position: 'absolute',
        top: Platform.OS === 'ios'? 15 : 0,
        left: 0,
        right: 0,
        height: (Platform.OS === 'ios') ? 49 : 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent'
    },
    button: {
        height: (Platform.OS === 'ios') ? 49 : 56
    },
    icon: {
        color: 'white'
    },
    title: {
        position: 'absolute',
        top: Platform.OS === 'ios'? 27 : 14,
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },
    titleText: {
        color: 'white',
        fontSize: (Platform.OS === 'ios') ? 17 : 19,
        fontWeight: (Platform.OS ==='ios') ? '600' : undefined
    },
});