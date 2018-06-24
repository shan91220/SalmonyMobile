import {
    listBorrowRecords as listBorrowRecordsFromApi
} from '../api/borrow.js'

function startListRecords() {
    return {
        type: '@BORROW/START_LIST_RECORDS'
    };
}
function endListRecords(borrowRecords){
    return{
        type:'@BORROW/END_LIST_RECORDS',
        borrowRecords
    };
};


export function listBorrowRecords() {
    return (dispatch, getState)=>{
        dispatch(startListRecords());
        return listBorrowRecordsFromApi().then(borrowRecords=>{
            dispatch(endListRecords(borrowRecords));
        }).catch(err=> {
            dispatch(endListRecords());
            console.error('Error listing borrowRecords', err);
        });
    };
};