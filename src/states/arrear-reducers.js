const initRecordState={
    recordLoading:false,
    arrearRecords:[]
};


export function arrear(state = initRecordState , action){
    switch(action.type){
        case '@ARREAR/START_LIST_POSTS':
            return {
                ...state
            };
        case '@ARREAR/END_LIST_RECORDS':
            return{
                ...state,
                arrearRecords: action.arrearRecords
            };
        default:
            return state;
    }
}