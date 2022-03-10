import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// get route for grabbing things from the server

function* getShelf() {

    try {
        const response = yield axios.get('/api/shelf');
        yield put({ type: 'SET_SHELF', payload: response.data });


    } catch (error) {
        console.log('SET shelf failed', error);

    }
}

function* postShelfItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload);

        yield put({type: 'FETCH_SHELF'})
    } catch {
        console.log('error');
    }
}

function* deleteShelfItem (action) {
    console.log(action.payload);
    let data = action.payload.user_id
    console.log(data);
    try {
        yield axios.delete(`/api/shelf/${action.payload.id}`, { data: {data} } );

        yield put({type: 'FETCH_SHELF'})
    } catch {
        console.log("error", action.payload);
    }
}

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', getShelf);
    yield takeLatest('POST_NEW_SHELF_ITEM', postShelfItem);
    yield takeLatest('DELETE_THING', deleteShelfItem)
}

export default shelfSaga;