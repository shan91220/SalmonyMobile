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
    }
});

export default connect((state, ownProps) => ({
    // TODO
}))(HeaderDisplay);
