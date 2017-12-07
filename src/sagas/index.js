import { all } from 'redux-saga/effects';
import authSaga from './auth';

const rootSaga = function* root () {
	yield all([
		authSaga()
	]);
};

export default rootSaga;