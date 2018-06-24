import {
    listArrearRecords as listArrearRecordsFromApi
} from '../api/arrear.js'

function startListRecords() {
    return {
        type: '@ARREAR/START_LIST_RECORDS'
    };
}
function endListRecords(borrowRecords){
    return{
        type:'@ARREAR/END_LIST_RECORDS',
        arrearRecords
    };
};


export function listArrearRecords() {
    return (dispatch, getState)=>{
        dispatch(startListRecords());
        return listArrearRecordsFromApi().then(arrearRecords=>{
            dispatch(endListRecords(arrearRecords));
        }).catch(err=> {
            dispatch(endListRecords());
            console.error('Error listing arrearRecords', err);
        });
    };
};