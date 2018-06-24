import 'babel-polyfill';
// const borrowBaseUrl = 'http://localhost:8060/api';

export function listArrearRecords() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listArrearRecords());
        }, 500);
    });
}

function _listArrearRecords(user_account = '') {
    let arrearRecords = [
        {   
            record_id : 1,
            name : 'Turtle',
            amount : 100,
            expect_date : '2018-04-22'
        },
        {   
            record_id : 2,
            name : 'Shan',
            amount : 10,
            expect_date : '2018-04-23'
        }
    ];
    return arrearRecords;
}

/*
export function listBorrowRecords(user_account = '') {
    let url = `${listBorrowRecords}/borrow`;
    let query = [];
    if (user_account)
        url += `?user_account=${user_account}`;

    console.log(`Making GET request to: ${url}`);

    return fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.json();
    });
}*/
