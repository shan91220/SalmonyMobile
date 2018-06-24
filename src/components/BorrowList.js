import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ListView, RefreshControl
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import {connect} from 'react-redux';
import {BorrowItem} from './BorrowItem';
import {listBorrowRecords} from '../states/borrow-actions';

class BorrowList extends React.Component {
    static propTypes = {
        borrowRecords: PropTypes.array
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
        this.props.dispatch(listBorrowRecords());
    }

    componentWillReceiveProps(nextProps) {
        const {borrowRecords} = this.props;
        if (borrowRecords !== nextProps.borrowRecords) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.borrowRecords)
            });
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(p) => {
                    return <BorrowItem {...p} />;
                }}
            />
        );
    }
}

export default connect(state =>({
    borrowRecords: state.borrow.borrowRecords
}))(BorrowList);