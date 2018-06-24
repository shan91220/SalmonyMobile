import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ListView, RefreshControl
} from 'react-native';

import {connect} from 'react-redux';
import {ArrearItem} from './ArrearItem';
import {listArrearRecords} from '../states/arrear-actions';

class ArrearList extends React.Component {
    static propTypes = {
        historyRecords: PropTypes.array
    };

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => JSON.stringify(r1) !== JSON.stringify(r2)
            })
        };
    }

    componentDidMount() {
        this.props.dispatch(listArrearRecords());
    }

    componentWillReceiveProps(nextProps) {
        const {arrearRecords} = this.props;
        if (arrearRecords !== nextProps.arrearRecords) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.arrearRecords)
            });
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(p) => {
                    return <ArrearItem {...p} />;
                }}
            />
        );
    }
}

export default connect(state =>({
    arrearRecords: state.arrear.arrearRecords
}))(ArrearList);