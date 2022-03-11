import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useSelector } from 'react-redux';
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
    try {
        yield axios.delete(`/api/shelf/${action.payload.id}` );

        yield put({type: 'FETCH_SHELF'})
    } catch {
        console.log("error", action.payload);
    }
}

function* sendUpdatedItem (action) {
    // console.log(updatedItem);
    // const updatedItem = useSelector(store => store.shelf.updateShelfItem)
    console.log(action.payload);
    try{
        yield axios.put(`api/shelf/${user.id}`, action.payload);

    } catch {
        console.log("rut ro scoob");
    }
}

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', getShelf);
    yield takeLatest('POST_NEW_SHELF_ITEM', postShelfItem);
    yield takeLatest('DELETE_THING', deleteShelfItem)
    yield takeLatest('SEND_UPDATED_ITEM', sendUpdatedItem)
}

export default shelfSaga;