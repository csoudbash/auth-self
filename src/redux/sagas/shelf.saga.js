import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// get route for grabbing things from the server

function* getShelf() {

    try{
        const response = yield axios.get('/api/shelf');
        yield put({ type: 'SET_SHELF', payload: response.data});
        
        
    } catch(error) {
        console.log('SET shelf failed', error);
        
    }
}

function* postShelfItem (action) {
try{
     yield axios.post('/api/shelf', action.payload);
} catch {
    console.log('error');
}

}

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', getShelf);
    yield takeLatest ('POST_NEW_SHELF_ITEM', postShelfItem);
}

export default shelfSaga;