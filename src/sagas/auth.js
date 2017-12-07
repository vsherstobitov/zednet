import { delay } from 'redux-saga';
import { signIn, attachSession, detachSession } from '../redux/modules/auth/actions';
import { takeEvery, put, call, select } from 'redux-saga/effects';
import config from '../config';
import axios from 'axios';
import base64 from 'base-64';

export function* auth (username = 'VISITOR123', password = 'VISITOR123') {
	console.log('auth saga');
	const url = `${config.API_HOST}/index.php/api/1/token`;
	const response = yield axios.post(url, 'username=VISITOR123&password=VISITOR123');
	const token = response.data.token;
	const userData = JSON.parse(base64.decode(token.split('.')[1]));
	if (response.data && response.data.success === true) {
		yield put(attachSession({ userData, token }));
	}else{
		yield put(detachSession());
	}
}

export function* signInWorker ({ payload = {} }) {

}

export function* routerWatcher () {
	yield takeEvery(signIn, auth);
}

export default routerWatcher;