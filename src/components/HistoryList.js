import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ListView, RefreshControl
} from 'react-native';

import {connect} from 'react-redux';
import {HistoryItem} from './HistoryItem';
import {listHistoryRecords} from '../states/history-actions';

class HistoryList extends React.Component {
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
        this.props.dispatch(listHistoryRecords());
    }

    componentWillReceiveProps(nextProps) {
        const {historyRecords} = this.props;
        // console.log('borrowRecords are' + borrowRecords);
        if (historyRecords !== nextProps.historyRecords) {
            // console.log('this:'+ borrowRecords);
            // console.log('next:'+ nextProps.borrowRecords);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.historyRecords)
            });
        }
    }

    render() {
        // const {borrowRecords} = this.props;

        // let children = (
        //     <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
        //         <div className='empty-text'>No record here.</div>
        //     </ListGroupItem>
        // );
        
        // if (borrowRecords.length) {
        //     children = borrowRecords.map(p => (
        //         <ListGroupItem key={p.id} action>
        //             <BorrowRecordItem {...p}/>
        //         </ListGroupItem>
        //     ));
        // }

        return (
            // <div className='record-list'>
            //     <ListGroup>
            //         {children}
            //     </ListGroup>
            // </div>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(p) => {
                    return <HistoryItem {...p} />;
                }}
            />
        );
    }
}

export default connect(state =>({
    historyRecords: state.history.historyRecords
}))(HistoryList);