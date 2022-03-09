import { put, takeLatest } from 'redux-saga/effects';
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

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', getShelf);
}

export default shelfSaga;