import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { autoRehydrate } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import rootSaga from '../sagas';

export default () => {
	const rootReducer = combineReducers(reducers);
	const middleware = [];

	const sagaMiddleware = createSagaMiddleware();

	middleware.push(sagaMiddleware);

	const store = createStore(
		rootReducer,
		{},
		composeWithDevTools(
			autoRehydrate({
				log: __DEV__
			}),
			applyMiddleware(...middleware)
		)
	);

	sagaMiddleware.run(rootSaga);
	return store;
}