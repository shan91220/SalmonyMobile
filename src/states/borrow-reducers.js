const initRecordState={
    recordLoading:false,
    borrowRecords:[]
};


export function borrow(state = initRecordState , action){
    switch(action.type){
        case '@BORROW/START_LIST_POSTS':
            return {
                ...state
            };
        case '@BORROW/END_LIST_RECORDS':
            return{
                ...state,
                borrowRecords: action.borrowRecords
            };
        default:
            return state;
    }
}