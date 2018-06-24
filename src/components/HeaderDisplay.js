import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Image} from 'react-native';

import {connect} from 'react-redux';

class HeaderDisplay extends React.Component {
    // TODO
    render() {
        return (
            <View style={styles.display}>
                <Text>This is header</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    image: {
        width: 262.5,
        height: 180,
        left: 92
    },
    temp: {
        fontSize: 48,
        color: 'white',
        backgroundColor: 'transparent',
        top: 76,
        right: 192,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 24
    }
});

export default connect((state, ownProps) => ({
    // TODO
}))(HeaderDisplay);
