import {
    listHistoryRecords as listHistoryRecordsFromApi
} from '../api/history.js'

function startListRecords() {
    return {
        type: '@HISTORY/START_LIST_RECORDS'
    };
}
function endListRecords(historyRecords){
    return{
        type:'@HISTORY/END_LIST_RECORDS',
        historyRecords
    };
};


export function listHistoryRecords() {
    return (dispatch, getState)=>{
        dispatch(startListRecords());
        return listHistoryRecordsFromApi().then(historyRecords=>{
            dispatch(endListRecords(historyRecords));
        }).catch(err=> {
            dispatch(endListRecords());
            console.error('Error listing historyRecords', err);
        });
    };
};