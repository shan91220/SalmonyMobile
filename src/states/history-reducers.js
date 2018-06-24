const initRecordState={
    recordLoading:false,
    historyRecords:[]
};


export function history(state = initRecordState , action){
    switch(action.type){
        case '@HISTORY/START_LIST_POSTS':
            return {
                ...state
            };
        case '@HISTORY/END_LIST_RECORDS':
            return{
                ...state,
                historyRecords: action.historyRecords
            };
        default:
            return state;
    }
}